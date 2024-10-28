import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Audios } from "./pages/audios";
import { Memes } from "./pages/memes";
import { Videos } from "./pages/videos";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataSpotProvider } from "./context/DataSpotContext";

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
    element: <Videos />,
  },
  {
    path: "/docs",
    element: <div className="flex justify-center">Documentos</div>,
  },
]);

export function App() {
  return (
    <DataSpotProvider>
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
    </DataSpotProvider>
  );
}
