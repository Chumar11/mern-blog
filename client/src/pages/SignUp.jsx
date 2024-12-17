import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setformData] = useState({});
  const [errorMessage, seterrorMessage] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const eventHnadler = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmitted = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return seterrorMessage("Please fill out all fields...");
    }

    try {
      setisLoading(true);
      seterrorMessage(null);
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        seterrorMessage(data.message);
        setisLoading(false);
      }
      setisLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (err) {
      seterrorMessage(err.message);
      setisLoading(false);
    }
  };
  console.log("iam form", formData);
  return (
    <div className="min-h-screen mt-20">
      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* {left side}  */}
        <div className="flex-1">
          <Link to="/" className=" text-4xl  font-bold dark:text-white">
            <span className="px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Sahard's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is Blog Page SignUP where you give us the email and password
            for login or with Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmitted}>
            <div className="">
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={eventHnadler}
              />
            </div>
            <div className="">
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={eventHnadler}
              />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="password"
                id="password"
                onChange={eventHnadler}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading....</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
