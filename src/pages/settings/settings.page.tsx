import { memo } from "react";
import { MainLayout } from "../../components";
import { Settings } from "./components";

export const SettingsPage = memo(() => {
  return (
    <MainLayout>
      <Settings />
    </MainLayout>
  );
});
