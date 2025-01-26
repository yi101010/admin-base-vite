import { Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy";
import { memo } from "react";
import { useMasterFacade } from "./master.facade";
import { MASTER_COLUMN_ITEM, MASTER_TABS } from "../../../constants";
import { MasterTable } from "../../../components";

export const Master = memo(() => {
  const { data, isLoading, isError, activeTab, onChangeTab } =
    useMasterFacade();

  return (
    <>
      <Typography level="h1">Master</Typography>
      <Tabs value={activeTab} onChange={onChangeTab}>
        <TabList>
          {MASTER_TABS.map((tab, index) => (
            <Tab key={index}>{tab.name}</Tab>
          ))}
        </TabList>
        {MASTER_TABS.map((tab, index) => (
          <TabPanel key={index} value={index}>
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Error loading data</div>
            ) : (
              <MasterTable columns={MASTER_COLUMN_ITEM} rows={data} />
            )}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
});
