import React from "react";
import { useRoutes } from "react-router-dom";
import SignIn from "../AdminRegister/SignInUser";
import SignUp from "../AdminRegister/SignUpUser";
const Routes = () => {
  let element = useRoutes([
    {
      path: "/admin/signup",
      element: <SignUp />,
    },
    {
      path: "/admin/signin",
      element: <SignIn />,
    },
  ]);
  return element;
};

export default Routes;
