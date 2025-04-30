import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import productData from '../data/products';

function Products({ cart, setCart }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Check if user is logged in

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      navigate('/login', { state: { from: '/products' } });
    } else {
      // Add product to cart
      setCart([...cart, { ...product, quantity: 1 }]);
      alert(`${product.name} has been added to your cart!`);
    }
  };

  useEffect(() => {
    // You can add any necessary logic that runs when this component mounts
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-center mb-4">Our Products</h2>

          <Row>
            {productData.map((product) => (
              <Col md={4} key={product.id} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      <strong>₹{product.price}</strong>
                    </Card.Text>
                    <Button
                      variant="success"
                      onClick={() => handleAddToCart(product)}
                      className="w-100"
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
