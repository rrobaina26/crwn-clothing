import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publicKey =
    "pk_test_51H5cT8B9MFB0bdId4VPdeU9iBB8dyydz4AHJPztFI81yFS6EyH2kXYpF3QABwFZDNYgrJUEypkHfrjCJ8KNlWhx500fVKsrOjt";
  const onToken = (token) => {
    console.log(token);
    alert("The payment was successful.");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButton;
