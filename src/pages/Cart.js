// src/pages/Cart.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {
  const cartItems = cart;

  // Sync cart updates to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    setCart(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="text-center mb-4">Your Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty!</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '50px', height: '50px' }}
                      />{' '}
                      {item.name}
                    </td>
                    <td>₹{item.price.toFixed(2)}</td>
                    <td>
                      <Form.Control
                        as="select"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value))
                        }
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </Form.Control>
                    </td>
                    <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
        <Col md={4}>
          <div className="border p-3 rounded">
            <h3>Order Summary</h3>
            <p>
              <strong>Items:</strong> {cartItems.length}
            </p>
            <p>
              <strong>Total:</strong> ₹{calculateTotal().toFixed(2)}
            </p>
            <Link to="/checkout">
              <Button variant="success" className="w-100">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
