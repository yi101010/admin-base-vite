import { lazy } from "react";

export const HelpPage = lazy(() =>
  import("./help.page").then((m) => ({ default: m.HelpPage }))
);
