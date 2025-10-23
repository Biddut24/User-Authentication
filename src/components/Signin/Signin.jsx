import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";


const Signin = () => {
  const { userLogin, forgetPassword, createUserByGoogle,createUserByGithub,createUserByFacbook } =
    useContext(AuthContext);

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });

    form.reset();
  };

  const getEmail = (event) => {
    const email = event.target.value;
    if (!email) {
      alert("plase enter your email address");
      return;
    }
    handleForgetPassword(email);
  };

  const handleForgetPassword = (email) => {
    forgetPassword(email)
      .then(() => {
        alert("Check your email to reset your password");
      })
      .catch((error) => {
        console.log(error);
      });
  };

/// google authentication


  const authByGoogle = () => {
    createUserByGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };


///user github authentication

  const authByGithub = () => {
    createUserByGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };


///user facbook authentication

  const authByFacbook = () => {
    createUserByFacbook()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="flex justify-center items-center mt-20 mb-15">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              onBlur={getEmail}
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a onClick={handleForgetPassword} className="link link-hover">
                Forget Password
              </a>
            </div>

            <div>
              <Link to="/sign-up" className="link link-hover">
                New To website? Please Register
              </Link>
            </div>

            <input
              value="Sign in"
              type="submit"
              className="btn btn-neutral mt-4"
            />
          </form>

          <button onClick={authByGoogle} className="btn btn-neutral mt-2">
            Continue With Google
          </button>
          <button onClick={authByGithub} className="btn btn-neutral mt-2">Continue With Github</button>
          <button onClick={authByFacbook} className="btn btn-neutral mt-2">Continue With Facbook</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
