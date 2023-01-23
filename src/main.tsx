import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { store } from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew"; 
import Technology from "./pages/technology";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App.App />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/destination/*",
          element: <Destination />,
        },
        {
          path: "/crew/*",
          element: <Crew />,
        }, 
        {
          path: "/technology/*",
          element: <Technology />,
        },
      ],
    },
  ],
  { basename: "/space-tourism-website" }
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider
      router={router}
      fallbackElement={
        <>
          <p className="text-black">Hi There</p>
        </>
      }
    />
  </Provider>
);
