import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Offers from "./components/Offers";
import { Body } from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import { RestaurantMenu } from "./components/RestaurantMenu";

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
        element: <Body isSearched={false}/>,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/search",
        element: <Body isSearched={true} />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
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
