import { lazy } from "react";

export const MasterPage = lazy(() =>
  import("./master.page").then((m) => ({ default: m.MasterPage }))
);
