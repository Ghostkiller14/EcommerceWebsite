import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "../pages/SignIn";

const ProtectedRoute = () => {
  const logInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {logInfo !== null &&
      logInfo.isLoggedIn &&
      logInfo.decodedUser === "User" ? (
        <Outlet />
      ) : (
        <SignIn />
      )}{" "}
      <></>
    </>
  );
};

export default ProtectedRoute;
