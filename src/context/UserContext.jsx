import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "./../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();
const facbookprovider = new FacebookAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user sign in
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // create user by google
  const createUserByGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user by github
  const createUserByGithub = () => {
    return signInWithPopup(auth, githubprovider);
  };
  // create user by Facbook
  const createUserByFacbook = () => {
    return signInWithPopup(auth, facbookprovider);
  };

  // updeate user
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  //verify user
  const sendVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //forgetPassword
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //user tracking
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  //user logout
  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const authInfo = {
    createUser,
    userLogin,
    updateUser,
    sendVerification,
    forgetPassword,
    createUserByGoogle,
    createUserByGithub,
    createUserByFacbook,
    user,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
