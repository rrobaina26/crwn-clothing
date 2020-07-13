import React from "react";
import {connect} from "react-redux";
import "./collection-item.styles.scss";
import {add_item} from "../../redux/cart/cart-actions";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, add_item }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <CustomButton onClick={()=>add_item(item)} invert>ADD TO CART</CustomButton>
    </div>
  );
};

export default connect(null, {add_item})(CollectionItem);
