import CredentialsProvider from "./context/CredentialsProvider";
import ContentProvider from "./context/ContentProvider";
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
          path: "content",
          element: <MainContent />,
        },
      ],
    },
  ]);

  return (
    <>
      <ContentProvider>
        <CredentialsProvider>
          <RouterProvider router={router} />
        </CredentialsProvider>
      </ContentProvider>
    </>
  );
}

export default App;
