import CredentialsProvider from "./context/CredentialsProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Credentials from "./Pages/Credentials";
import MainOutlet from "./Pages/MainOutlet";
import MainContent from "./Pages/MainContent";

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
        {
          path:'content',
          element:<MainContent/>
        }
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
