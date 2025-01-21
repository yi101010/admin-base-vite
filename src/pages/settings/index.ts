import { lazy } from "react";

export const SettingsPage = lazy(() =>
  import("./settings.page").then((m) => ({ default: m.SettingsPage }))
);
