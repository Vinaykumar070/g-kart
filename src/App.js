import React, { useState } from 'react';
import { Container, Card, CardMedia, CardContent, Typography, Rating, Button } from '@mui/material';
import './App.css';

const products = [
  {
    id: 1,
    category: 'Shirt',
    name: 'Casual Shirt',
    price: 599,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 2,
    category: 'Pant',
    name: 'Denim Jeans',
    price: 799,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 3,
    category: 'Shoes',
    name: 'Running Shoes',
    price: 1299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 4,
    category: 'Shirt',
    name: 'Formal Shirt',
    price: 699,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleShopNow = (product) => {
    alert(`Redirecting to purchase ${product.name} for ₹${product.price}`);
    // Redirect logic can be added here
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ margin: '20px 0' }}>
        Welcome to Our g-cart
      </Typography>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {product.category}
                </Typography>
                <Typography variant="h6" color="primary">
                  ₹{product.price}
                </Typography>
                <Rating value={product.rating} precision={0.1} readOnly />
                <div className="button-container">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                    sx={{ marginRight: 1 }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleShopNow(product)}
                  >
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default App;
