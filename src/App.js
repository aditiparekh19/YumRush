import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Offers from "./components/Offers";
import Search from "./components/Search";
import { Body } from "./components/Body";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
