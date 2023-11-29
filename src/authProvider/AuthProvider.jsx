import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import useAxiosSecure from "../hook/useAxiosSecure";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = createUser?.email || user?.email;
      // const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log("current user:", currentUser);
      // if user exist then create access token....
      // if (currentUser) {
      //   axiosSecure.post("/jwt", loggedUser).then((res) => {
      //     console.log(res.data);
      //   });
      // } else {
      //   axiosSecure.post("/logOut", loggedUser).then((res) => {
      //     console.log(res.data);
      //   });
      // }
      setLoading(false);
    });
    return () => {
      unsubScribe();
    };
  }, [axiosSecure, user]);

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const Authentication = {
    googleUser,
    createUser,
    userLogin,
    logOut,
    profileUpdate,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={Authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
