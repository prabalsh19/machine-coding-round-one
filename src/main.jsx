import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Search } from "./pages/Search/Search.jsx";
import { BookContextProvider } from "./contexts/bookContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/search", element: <Search /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookContextProvider>
      <RouterProvider router={router} />
    </BookContextProvider>
  </React.StrictMode>
);
