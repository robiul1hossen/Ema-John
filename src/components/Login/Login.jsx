import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const from = location.state?.from?.pathname;

    signIn(email, password)
      .then((result) => {
        const signedIn = result.user;
        console.log(signedIn);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container ">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type={show ? "text" : "password"} name="password" id="" required />
          <p onClick={() => setShow(!show)}>
            <small>{show ? <span>hide</span> : <span>show</span>}</small>
          </p>
        </div>
        <p>
          New to Ema-John ? Please <Link to="/Sign-up">Sign Up</Link>
        </p>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
