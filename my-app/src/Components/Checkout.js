// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = ({ cart }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Calcul du total en tenant compte de la quantité de chaque produit
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="main-content">
        <h1>Checkout</h1>
            <form className="checkout-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" onChange={handleChange} required />
                </div>
                <p>Total Price: {totalPrice} €</p>
                <button type="submit">Checkout</button>
            </form>
        </div>
    );
};

export default Checkout;

