import React from "react";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <CustomButton onClick={() => addItem(item)} invert>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
