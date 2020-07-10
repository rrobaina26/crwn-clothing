import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import { setCurrentUser } from "./redux/user/user.actions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

class App extends Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = { setCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
