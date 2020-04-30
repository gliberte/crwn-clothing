import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.util";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };
  const handleChange = event => {
    const { value, name } = event.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="email"
          required
        />

        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
