import { Route, Redirect } from "react-router-dom";
import { useState } from "react";
import React from "react";

export default function PrivateRoutes(props) {
  const isLogin = localStorage.getItem("Token");
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
}
