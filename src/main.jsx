import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/index.jsx";
import Timeline from "./Pages/Timeline/index.jsx";
import Create from "./Pages/Create/index.jsx";
import Messages from "./Pages/Messages/index.jsx";
import Profile from "./Pages/Profile/index.jsx";
import Signup from "./Pages/SignUp/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
