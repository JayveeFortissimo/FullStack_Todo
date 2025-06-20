import CredentialsProvider from "./Provider/CredentialsProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Credentials from "./Pages/Credentials";
import MainOutlet from "./Pages/MainOutlet";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainOutlet />,
      children: [
        {
          index: true,
          element: <Credentials />,
        },
      ],
    },
  ]);

  return (
    <>
    <CredentialsProvider>
<RouterProvider router={router} />
    </CredentialsProvider>
    
    </>
  );

}

export default App;
