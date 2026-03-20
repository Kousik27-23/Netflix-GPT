import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />

      {/* Background Image */}
      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_small.jpg"
        alt="bg"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Login Form */}
      <form className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-black/60  p-8 rounded-lg w-100  text-white">
        <h2 className="text-white text-2xl mb-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 mb-7 bg-gray-500 text-white rounded "
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-3 mb-7 bg-gray-500 text-white rounded "
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-7  bg-gray-500 text-white rounded"
        />

        <button className="w-full cursor-pointer mb-5 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Alreday register? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
