import { SyntheticEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MASTER_TABS } from "../../../constants";

export const useMasterFacade = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["masterTabData", activeTab],
    queryFn: async () => {
      const response = await fetch(MASTER_TABS[activeTab].path);
      if (!response.ok) {
        const errorMessage = `Failed to fetch data. Status: ${response.status}, Tab: ${activeTab}`;
        throw new Error(errorMessage);
      }
      return response.json();
    },
  });

  const onChangeTab = (
    _event: SyntheticEvent | null,
    value: number | string | null
  ) => {
    if (typeof value === "number") {
      setActiveTab(value);
    }
  };

  return { data, isLoading, isError, activeTab, onChangeTab };
};
