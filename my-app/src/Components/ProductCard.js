// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart, removeFromCart, cart }) => {
    const cartItem = cart.find((item) => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price} €</p>
            <p>{product.stock ? "IN STOCK" : "SOLD OUT"}</p>
            <div className="quantity-controls">
                <button onClick={() => removeFromCart(product.id)} disabled={quantity === 0}>-</button>
                <span>{quantity}</span>
                <button onClick={() => addToCart(product)} disabled={!product.stock}>+</button>
            </div>
            <button onClick={() => addToCart(product)} disabled={!product.stock}>
                {quantity > 0 ? "Add More" : "Add to cart"}
            </button>
            <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
        </div>
    );
};

export default ProductCard;

