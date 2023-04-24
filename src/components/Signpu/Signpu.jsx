import React, { useState } from "react";
import "./Signpu.css";
import { Link } from "react-router-dom";

const Signpu = () => {
  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password !== confirm) {
      setError("");
      setError("Password did not match.");
      return;
    } else if (password.length < 6) {
      setError("");
      setError("Password must be 6 character or longer");
      return;
    }
  };

  return (
    <div>
      <div className="form-container ">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="confirm" id="" required />
          </div>
          <p>
            Already have an account? Please <Link to="/login">Login</Link>
          </p>
          <input className="btn-submit" type="submit" value="Sign Up" />
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Signpu;
