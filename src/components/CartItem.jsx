import React from "react";
import { string, func, number } from "prop-types";

// CSS
import "../css/CartItem.css";

const CartItem = ({ image, title, priceText, quantity, changeQuantity }) => (
  <article className="cart-item pos-rel">
    <button
      type="button"
      className="close-btn pos-abs"
      onClick={() => changeQuantity(0)}
    >
      X
    </button>
    <h5>{title}</h5>
    <div className="cart-item-img">
      <img src={image} alt={title} />
    </div>
    <div className="cart-item-footer">
      <div className="cart-item-quantity">
        <button type="button" onClick={() => changeQuantity(quantity - 1)}>
          -
        </button>
        <span>{quantity}</span>
        <button
          className="pos-rel"
          type="button"
          onClick={() => changeQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <p>{priceText}</p>
    </div>
  </article>
);

CartItem.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  priceText: string.isRequired,
  quantity: number.isRequired,
  changeQuantity: func.isRequired
};

export default CartItem;
