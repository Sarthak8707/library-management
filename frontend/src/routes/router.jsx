import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook";
import BooksList from "../pages/BooksList";

import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/register",
    element: <Register />
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/add-books",
        element: <AddBook />
      },

      {
        path: "/books-list",
        element: <BooksList />
      }
    ]
  }
]);