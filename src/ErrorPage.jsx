import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <center>
      <h1>Error 404 - Page Not Found</h1>
      <NavLink to="/">
        <button className="go-to-previous-page">Go to Homepage</button>
      </NavLink>{" "}
      <button className="go-back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </center>
  );
};

export default ErrorPage;
