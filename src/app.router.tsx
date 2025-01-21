import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "./constants";
import {
  AlertPage,
  DashboardPage,
  HelpPage,
  HomePage,
  MasterPage,
  NotFoundPage,
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
  {
    path: ROUTES.NOTFOUND,
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <Navigate replace to={ROUTES.NOTFOUND} />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
