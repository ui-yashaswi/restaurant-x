import React, { useEffect } from "react";
import NotFound from "./pages/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/ContactUs/Contact";
import { useSelector } from "react-redux";
import BookedEvents from "./pages/BookedEvents/BookedEvents";
import BookedCaterings from "./pages/BookedCaterings/BookedCaterings";
import ProtectedAdminRoute from "./components/ProtectedRoutes/ProtectedAdminRoute";
import Login from "./pages/Login/Login";
import toast from "react-hot-toast";
import { Dashboard } from "./pages/Dashboard/Dashboard";
function App() {
  const { user, loading, errorMessage, successMessage } = useSelector(
    (slice) => slice.auth
  );

  useEffect(() => {
    console.log(errorMessage, successMessage);
    if (successMessage) {
      toast.success(successMessage);
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [successMessage, errorMessage]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",

      // element: <ProtectedAdminRoute />,

      children: [
        {
          path: "events",
          element: (
            <Dashboard>
              <BookedEvents />,
            </Dashboard>
          ),
        },
        {
          element: <Dashboard />,
          path: "dashboard",
        },
        {
          path: "caterings",
          element: (
            <Dashboard>
              <BookedCaterings />,
            </Dashboard>
          ),
        },
      ],
    },
    { path: "*", element: <NotFound /> }, // For 404 page
  ]);

  return <RouterProvider router={router} />;
}

export default App;
