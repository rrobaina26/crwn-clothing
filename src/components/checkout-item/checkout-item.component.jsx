import React from "react";
import "./chheckout-item.styles.scss";
import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart-actions";

const CheckoutItem = ({ checkoutItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = checkoutItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(checkoutItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(checkoutItem)}>
          &#10095;
        </div>
      </div>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(checkoutItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { clearItem, addItem, removeItem })(CheckoutItem);
