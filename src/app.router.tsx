import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants";
import { HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
