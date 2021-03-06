import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import ShopPage from "./pages/shop/shop.component";
import { createStructuredSelector } from "reselect";
import Header from "./components/header/header.component";
import { Redirect, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";
import {
  auth,
  createUserProfileDocument,
 /* addCollectionsAndDocuments,*/
} from "./firebase/firebase.utils";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { selectCollectionsForOverview } from "./redux/shop/shop.selectors";

class App extends Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, /*collections*/ } = this.props;

    /* addCollectionsAndDocuments(
      "collections",
      collections.map(({ title, items }) => ({ title, items }))
    ); */

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log("User Sign In");
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        console.log("User Sign Out");
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectCollectionsForOverview,
});

const mapDispatchToProps = { setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
