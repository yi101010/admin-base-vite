import { memo } from "react";
import { MainLayout } from "../../components";
import { NotFound } from "./components";

export const NotFoundPage = memo(() => {
  return (
    <MainLayout>
      <NotFound />
    </MainLayout>
  );
});
