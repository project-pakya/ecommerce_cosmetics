// src/pages/Home.js
import React from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';

function Home() {
  return (
    <>
      {/* Hero Carousel as Banner */}
      <Carousel fade className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/hero1.png"
            alt="Hero Slide 1"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="text-start">
            <h1 className="display-4 fw-bold text-success">Welcome to Organic Glow</h1>
            <p className="lead text-light">
              Discover the finest organic cosmetics for your natural beauty.
            </p>
            <Button variant="success" size="lg" href="/products" className="rounded-pill mt-3">
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/hero2.png"
            alt="Hero Slide 2"
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="text-start">
            <h1 className="display-4 fw-bold text-success">Pure. Natural. Beautiful.</h1>
            <p className="lead text-light">
              Handpicked ingredients for a healthier glow.
            </p>
            <Button variant="success" size="lg" href="/products" className="rounded-pill mt-3">
              Explore Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;



