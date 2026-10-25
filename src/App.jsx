
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import BlogDetails from "./components/BlogDetails";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "category/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "*",
        element: <NotFound />,
     }
    ],
  },
  {
    path: "/blog/:id",
    element: <BlogDetails />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
