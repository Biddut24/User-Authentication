import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/UserContext";

const SignUp = () => {
  const {
    createUser,
    updateUser,
    sendVerification,
    createUserByGoogle,
    createUserByGithub,
    createUserByFacbook,
  } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setPasswordError("password should be 6 characters or longer");
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password should One Uppercase");
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password should One Small latter");
      return;
    }

    if (!/(?=.*[#?!@$%^&*])/.test(password)) {
      setPasswordError("Password should One include #,?,!,@,$,%,^,&,* ");
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser(name)
          .then(() => {
            sendVerification().then(() => {
              alert("User Created !!!! Verify your email address");
            });
          })
          .catch((error) => {});
      })
      .catch((error) => {
        const message = error.message;
        console.log("Signup error:", message);
      });

    form.reset();
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

  /// github authentication
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
          <form onSubmit={handleSignup} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
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

            <span className="text-red-500">{passwordError}</span>

            <div className="mt-2">
              <Link to="/sign-in" className="link link-hover text-blue-500">
                Already have an account? Please Login
              </Link>
            </div>

            <input
              value="Sign Up"
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
            Continue With Facbook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
