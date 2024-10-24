import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Audios } from "./pages/audios";
import { Memes } from "./pages/memes";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { NavbarProvider } from "./context/navbarContext";
import { MemeSpotProvider } from "./context/MemeSpotContext";
import { PlayerContentProvider } from "./context/PlayerContext";

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
    element: <div className="flex justify-center">Videos</div>,
  },
  {
    path: "/docs",
    element: <div className="flex justify-center">Documentos</div>,
  },
]);

export function App() {
  return (
    // <NavbarProvider>
    <MemeSpotProvider>
      <PlayerContentProvider>
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
      </PlayerContentProvider>
    </MemeSpotProvider>
    // </NavbarProvider>
  );
}
