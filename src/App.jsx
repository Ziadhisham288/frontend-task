import CustomerDetails from "./components/CustomerDetails";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "/home", element: <MainPage /> },
        { path: "/customer/:id", element: <CustomerDetails /> },
      ],
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
