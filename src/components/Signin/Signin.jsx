import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Signin = () => {
  const {
    userLogin,
    forgetPassword,
    createUserByGoogle,
    createUserByGithub,
    createUserByFacbook,
  } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User logged in:", user);
      })
      .catch((error) => {
        console.log("Login error:", error.message);
      });

    form.reset();
  };

  const handleForgetPassword = () => {
    if (!email) {
      alert("Please enter your email address first");
      return;
    }

    forgetPassword(email)
      .then(() => {
        alert("Check your email to reset your password"); // ✅ alert আসবে
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /// Google authentication
  const authByGoogle = () => {
    createUserByGoogle()
      .then((result) => console.log("Google user:", result.user))
      .catch((error) => console.log(error.message));
  };

  /// Github authentication
  const authByGithub = () => {
    createUserByGithub()
      .then((result) => console.log("Github user:", result.user))
      .catch((error) => console.log(error.message));
  };

  /// Facebook authentication
  const authByFacbook = () => {
    createUserByFacbook()
      .then((result) => console.log("Facebook user:", result.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex justify-center items-center mt-20 mb-15">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} // 🔹 email ধরে রাখবে
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            {/* Forget Password link */}
            <div>
              <a
                onClick={handleForgetPassword}
                className="link link-hover text-blue-600 cursor-pointer"
              >
                Forget Password
              </a>
            </div>

            <div>
              <Link to="/sign-up" className="link link-hover">
                New to website? Please Register
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
          <button onClick={authByGithub} className="btn btn-neutral mt-2">
            Continue With Github
          </button>
          <button onClick={authByFacbook} className="btn btn-neutral mt-2">
            Continue With Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
