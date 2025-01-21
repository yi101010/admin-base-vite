import { memo } from "react";
import { MainLayout } from "../../components";
import { Master } from "./components";

export const MasterPage = memo(() => {
  return (
    <MainLayout>
      <Master />
    </MainLayout>
  );
});
