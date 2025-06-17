import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register";
import MainOutlet from "./Pages/MainOutlet";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainOutlet />,
      children: [
        {
          index: true,
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
