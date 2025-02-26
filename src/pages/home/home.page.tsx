import { memo } from "react";
import { MainLayout } from "../../components";
import { Home } from "./components";

export const HomePage = memo(() => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
});
