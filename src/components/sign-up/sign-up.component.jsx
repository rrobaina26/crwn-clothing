import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Creating user and password auth");
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      const userRef = await createUserProfileDocument(user, { displayName });
      console.log(userRef);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error.message);
      console.error("Couldn't create user", error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            label="Name"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
