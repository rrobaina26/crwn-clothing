import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect"
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button.component";


const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        { cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
        :
        <span className="empty-message">Your cart is empty.</span>
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProp = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProp)(CartDropdown);
