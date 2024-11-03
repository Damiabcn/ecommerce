// src/components/Home.js
import React from 'react';
import ProductCard from './ProductCard';

const Home = ({ products, addToCart, removeFromCart, cart }) => {
    const categories = [...new Set(products.map((product) => product.category))];

    return (
        <div className="home">
            <h1>Our Products</h1>
            {categories.map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div className="product-list">
                        {products
                            .filter((product) => product.category === category)
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart}
                                    cart={cart}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;

