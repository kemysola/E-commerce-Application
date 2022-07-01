import React from "react";
import AuthContext from "../context/AuthContext";
import Login from "./auth/Login";
import AllProducts from "./products/AllProducts";

function Navigation() {
  return <AuthContext.Consumer>

  </AuthContext.Consumer>;
}

export default Navigation;
