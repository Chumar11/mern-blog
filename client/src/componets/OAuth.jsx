import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInFailture,
  signInSucess,
} from "../redux/reduxslice/userSlice";
import { Link, useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const handleGoogleEvent = async () => {
    const Provider = new GoogleAuthProvider();
    Provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, Provider);
      console.log(resultFromGoogle.user.photoURL);

      const res = await fetch("/api/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultFromGoogle.user.displayName,
          email: resultFromGoogle.user.email,
          profileimage: resultFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSucess(data));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone={"pinkToOrange"}
      outline
      onClick={handleGoogleEvent}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
};

export default OAuth;
