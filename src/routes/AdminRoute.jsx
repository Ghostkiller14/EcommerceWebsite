import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "../pages/SignIn";

const AdminRoute = () => {
  const logInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {logInfo !== null &&
      logInfo.isLoggedIn &&
      logInfo.decodedUser.role === "Admin" ? (
        <Outlet />
      ) : (
        <SignIn />
      )}{" "}
      <></>
    </>
  );
};

export default AdminRoute;
