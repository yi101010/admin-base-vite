import { lazy } from "react";

export const AlertPage = lazy(() =>
  import("./alert.page").then((m) => ({ default: m.AlertPage }))
);
