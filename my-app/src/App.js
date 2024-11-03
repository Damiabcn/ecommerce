import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import products from './data/products';
import ProductDetailWrapper from './Components/ProductDetailWrapper'; 
import './styles.css';


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
      setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.id === product.id);
          if (existingProduct) {
              return prevCart.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              );
          } else {
              return [...prevCart, { ...product, quantity: 1 }];
          }
      });
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
};


  return (
      <Router>
           <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/checkout">Checkout</Link>
            </nav>
          <Routes>
              <Route
                  path="/"
                  element={<Home products={products} addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />}
              />
              <Route path="/checkout" element={<Checkout cart={cart} />} />
              <Route path="/product/:id" element={<ProductDetailWrapper products={products} addToCart={addToCart} />} />
          </Routes>
      </Router>
  );
};

export default App;