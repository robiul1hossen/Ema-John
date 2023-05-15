import React, { useContext, useState } from "react";
import "./Signpu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Signpu = () => {
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError("");
    if (password !== confirm) {
      setError("Password did not match.");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
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
