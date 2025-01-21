import { memo } from "react";
import { MainLayout } from "../../components";
import { Help } from "./components";

export const HelpPage = memo(() => {
  return (
    <MainLayout>
      <Help />
    </MainLayout>
  );
});
