import React from "react";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toogleCart } from "../../redux/cart/cart-actions";
import { selectCountTotalItems } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ countTotalItems, toogleCart }) => {
  return (
    <div className="cart-icon" onClick={toogleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countTotalItems}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  countTotalItems: selectCountTotalItems,
});

export default connect(mapStateToProps, { toogleCart })(CartIcon);
