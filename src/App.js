import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Offers from "./components/Offers";
import { Body } from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import { RestaurantMenu } from "./components/RestaurantMenu";
import appStore from "./utils/store/AppStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
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
        element: <Body isSearched={false} />,
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
      {
        path: "/cart",
        element: <Cart />,
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
