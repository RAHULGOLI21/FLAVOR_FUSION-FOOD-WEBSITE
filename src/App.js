import React, { lazy, Suspense }from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderLayout from "./Components/Header";
import Body from "./Components/Body";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderLayout />
      {/* This Outlet component is replaced by the children component according to the path */}
      <Outlet />
    </div>
  );
};

//Chunking - Code Splitting - Dynamic Bundling - LazyLoading - OnDemand Loading
//Lets explore above terms using "GroceryPage"
//You shouldn't import Grocery component like this if you want it as seperate bundler/LazyLoading
// import Grocery from "./Components/Grocery";
//Be in home page ->inspect-> network -> click on Grocery tab( you see a new bundler created for it)
//It makes the application fast instead of bundling all the code in one file( making it into chunks)
const Grocery = lazy(()=> import("./Components/Grocery"));


const appRouting = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    // We want header component to be fixed and component needs to be changed according to the route
    // So we can use children key to specify what component needs to render to what path along with "Outlet" component.
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouting} />);
