import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import React from "react";
import { MainLazy } from "../../pages/Main/MainLazy";
import { ProfileLazy } from "../../pages/Profile/ui/ProfileLazy";
import PrivateRoute from "../../widgets/PrivateRoute/PrivateRoute";
import { PostLazy } from "../../pages/PostPage/ui/PostPageLazy";

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
        element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: <ProfileLazy />,
          },
        ],
      },
      {
        path: "/post/:id",
        element: <PostLazy />,
        
      },
    ],
  },
]);
