// src/components/ProductDetailWrapper.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const ProductDetailWrapper = ({ products, addToCart }) => {
    const { id } = useParams();
    const product = products.find((prod) => prod.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return <ProductDetail product={product} addToCart={addToCart} />;
};

export default ProductDetailWrapper;
