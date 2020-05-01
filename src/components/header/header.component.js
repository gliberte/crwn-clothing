import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Welcome, {currentUser.displayName}
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
const mapStateToProps = state =>{
  const {currentUser} = state.user
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Header);
