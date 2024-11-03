import React, { useState } from 'react';

const ProductDetail = ({ product, addToCart }) => {
    const [selectedImage, setSelectedImage] = useState(product.image);
    return(
    <div className="product-detail">
       <img src={selectedImage} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price} €</p>
        <p>{product.stock ? "IN STOCK" : "SOLD OUT"}</p>
        <p>{product.description}</p>
        <p>Sizes: {product.sizes.join(', ')}</p>
        <p>Colors: {product.colors.join(', ')}</p>
        <div className="image-gallery">
                <h3>More Images</h3>
                <div className="thumbnail-container">
                    <img  
                        src={product.image} 
                        alt={product.name} 
                        onClick={() => setSelectedImage(product.image)} 
                        className="thumbnail" 
                    />
                    {product.gallery.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`${product.name} ${index}`} 
                            onClick={() => setSelectedImage(img)} 
                            className="thumbnail" 
                        />
                    ))}
                </div>
            </div>
        <button onClick={() => addToCart(product)} disabled={!product.stock}>
            {product.stock ? "Add to cart" : "Unavailable"}
        </button>
    </div>
);
};

export default ProductDetail;

