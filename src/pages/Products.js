import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import productData from '../data/products';

function Products({ cart, setCart }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: '/products' } });
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      alert(`${product.name} has been added to your cart!`);
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setPriceRange({ min: '', max: '' });
    setSearchTerm('');
    setSortBy('');
  };

  // Filtered and sorted products
  const filteredProducts = productData
    .filter((product) => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesMin = priceRange.min ? product.price >= parseInt(priceRange.min) : true;
      const matchesMax = priceRange.max ? product.price <= parseInt(priceRange.max) : true;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesMin && matchesMax && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'nameAsc') return a.name.localeCompare(b.name);
      if (sortBy === 'nameDesc') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <Container className="mt-5">
      <Row>
        {/* Filters Sidebar */}
        <Col md={3}>
          <h5 className="mb-3">Filter by Category</h5>
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mb-3"
          >
            <option value="">All</option>
            <option value="Skincare">Skincare</option>
            <option value="Haircare">Haircare</option>
            <option value="Makeup">Makeup</option>
          </Form.Select>

          <h5>Filter by Price</h5>
          <Form.Group className="mb-2">
            <Form.Control
              type="number"
              placeholder="Min Price"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Max Price"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            />
          </Form.Group>

          <Button variant="secondary" onClick={handleClearFilters} className="w-100">
            Clear Filters
          </Button>
        </Col>

        {/* Products */}
        <Col md={9}>
          <Row className="mb-4">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Form.Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Sort By</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="nameAsc">Name: A-Z</option>
                <option value="nameDesc">Name: Z-A</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                  <Card className="shadow-sm h-100">
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text><strong>₹{product.price}</strong></Card.Text>
                      <Button
                        variant="success"
                        onClick={() => handleAddToCart(product)}
                        className="mt-auto w-100"
                      >
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-center">No products match your filters.</p>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
