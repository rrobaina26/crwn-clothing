import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectHiddenCart } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import {
  HeaderContainer,
  LogoContainer,
  OptionsConatiner,
  Option,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsConatiner>
        <Option to="/shop">SHOP</Option>
        <Option to="/contact">CONTACT</Option>
        {currentUser ? (
          <Option as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </Option>
        ) : (
          <Option to="/sign-in">SIGN IN</Option>
        )}
        <CartIcon />
      </OptionsConatiner>
      {hidden ? "" : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHiddenCart,
});

export default connect(mapStateToProps)(Header);
