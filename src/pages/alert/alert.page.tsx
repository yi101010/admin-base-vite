import { memo } from "react";
import { MainLayout } from "../../components";
import { Alert } from "./components";

export const AlertPage = memo(() => {
  return (
    <MainLayout>
      <Alert />
    </MainLayout>
  );
});
