import { memo } from "react";
import { MainLayout } from "../../components";
import { Dashboard } from "./components";

export const DashboardPage = memo(() => {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
});
