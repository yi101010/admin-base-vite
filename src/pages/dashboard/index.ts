import { lazy } from "react";

export const DashboardPage = lazy(() =>
  import("./dashboard.page").then((m) => ({ default: m.DashboardPage }))
);
