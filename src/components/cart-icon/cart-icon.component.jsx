import React from "react";
import "./cart-icon.styles.scss"
import {connect} from "react-redux";
import {toogleCart} from "../../redux/cart/cart-actions"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({toogleCart}) => {
  return (
    <div className="cart-icon" onClick={toogleCart} >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, {toogleCart})(CartIcon);
