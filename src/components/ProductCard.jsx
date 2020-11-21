import React from "react";
import { string, func } from "prop-types";

// CSS
import "../css/ProductCard.css";

const ProductCard = ({ image, title, priceText, handleAddToCart }) => (
  <div className="product-card">
    <img src={image} alt={title} />
    <h5>{title}</h5>
    <p>{priceText}</p>
    <button type="button" className="black-btn" onClick={handleAddToCart}>
      Add to Cart
    </button>
  </div>
);

ProductCard.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  priceText: string.isRequired,
  handleAddToCart: func.isRequired
};

export default ProductCard;
