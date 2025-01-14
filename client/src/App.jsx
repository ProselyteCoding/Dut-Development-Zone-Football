import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import Team from "./pages/Team/Team.jsx";
import Card from "./pages/Card/Card.jsx";
import News from "./pages/News/News.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/card",
    element: (
      <div>
        <Card />
      </div>
    ),
  },
  {
    path: "/news",
    element: (
      <div>
        <News />
      </div>
    ),
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
