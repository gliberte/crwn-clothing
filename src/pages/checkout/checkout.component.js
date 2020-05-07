import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className="total">
        TOTAL: ${cartTotal}
      </div>
      <div className="test-warning">
      Usar el siguiente dato para test:
      <br/>
        4242 4242 4242 4242 - Exp: 01/20 - cw: 123
      </div>
      <StripeCheckoutButton price={cartTotal}></StripeCheckoutButton>
      
    </div>
  );
};

export default CheckoutPage;
