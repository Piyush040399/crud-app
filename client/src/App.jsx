import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/create",
      element: (
        <Layout>
          <AddForm />
        </Layout>
      ),
    },
    {
      path: "/update/:id",
      element: (
        <Layout>
          <EditForm />
        </Layout>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
