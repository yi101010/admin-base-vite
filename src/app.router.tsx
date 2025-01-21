import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./constants";
import {
  AlertPage,
  DashboardPage,
  HelpPage,
  HomePage,
  MasterPage,
  SettingsPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <DashboardPage />,
  },
  {
    path: ROUTES.MASTER,
    element: <MasterPage />,
  },
  {
    path: ROUTES.ALERT,
    element: <AlertPage />,
  },
  {
    path: ROUTES.HELP,
    element: <HelpPage />,
  },
  {
    path: ROUTES.SETTINGS,
    element: <SettingsPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
