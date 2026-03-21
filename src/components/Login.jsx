import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utills/Validate";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const[errorMessage,setErrorMessage]=useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(emailValue, passwordValue);

    // if (message) {
    //   alert(message);
    //   return;
    // }
    
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(message)
    setErrorMessage(message);
    // console.log("Valid Data ✅");
  };

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />

      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_small.jpg"
        alt="bg"
      />

      <div className="absolute inset-0 bg-black opacity-30"></div>

      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleButtonClick();
        }}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-black/80 p-8 rounded-lg w-100 text-white"
      >
        <h2 className="text-2xl mb-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 mb-7 bg-gray-500 text-white rounded"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-3 mb-7 bg-gray-500 text-white rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 bg-gray-500 text-white rounded"
        />
        <p className="text-red-500 font-bold text-sm py-4 ">{errorMessage}</p>
      
        <button
          type="submit"
          className="w-full cursor-pointer mb-5 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded font-semibold"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;