// App.jsx

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";
// nima gap ishla yaxshimi bo'lyaptimi
// components
import ProtectedRoutes from "./components/ProtectedRoutes";
import { Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Login from "./pages/login";
import Register from "./pages/register";
// context
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { user } = useContext(GlobalContext);

  console.log(user);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={true}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/Login",
      element:  true ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/Register",
      element: true ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;



