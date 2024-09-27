import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Audios } from "./pages/audios";
import { Memes } from "./pages/memes";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavbarProvider } from "./context/navbarContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/memes",
    element: <Memes />,
  },
  {
    path: "/audios",
    element: <Audios />,
  },
  {
    path: "/videos",
    element: <Audios />,
  },
  {
    path: "/docs",
    element: <Audios />,
  },
]);

export function App() {
  return (
    <NavbarProvider>
      <Header />
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </NavbarProvider>
  );
}
