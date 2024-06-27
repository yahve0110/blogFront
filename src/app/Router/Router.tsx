import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import React, { useState } from "react";
import { MainLazy } from "../../pages/Main/MainLazy";
import { ProfileLazy } from "../../pages/Profile/ProfileLazy";
import SignUp from "../../widgets/components/SignUpForm/SignUpForm";
import Modal from "../../widgets/components/Modal/Modal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/main" />,
      },
      {
        path: "/main",
        element: <MainLazy />,
      },
      {
        path: "/profile",
        element: <ProfileLazy />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
