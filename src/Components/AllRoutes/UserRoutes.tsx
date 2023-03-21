import React from "react";
import { useRoutes } from "react-router-dom";
import SignIn from "../AdminRegister/SignInUser";
import SignUp from "../AdminRegister/SignUpUser";
import OptionSignin from "../UserRegistration/OptionSignin";
import OptionSignup from "../UserRegistration/OptionSignup";
import One from "../UserRegistration/OptionSignup";
import UserSignin from "../UserRegistration/UserSignin";
import UserSignup from "../UserRegistration/UserSignup";

const UserRoutes = () => {
  let element = useRoutes([
    {
      path: "/user/signup",
      element: <UserSignup />,
    },
    {
      path: "/optionsignup",
      element: <OptionSignup />,
    },
    {
      path: "/optionsignin",
      element: <OptionSignin />,
    },
    {
      path: "/user/signin",
      element: <UserSignin />,
    },
  ]);
  return element;
};

export default UserRoutes;
