import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import { router } from "./app/Router/Router.tsx";
import "./shared/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
