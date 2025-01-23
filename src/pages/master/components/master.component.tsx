import { Tab, TabList, TabPanel, Tabs, Typography } from "@mui/joy";
import { memo } from "react";

export const Master = memo(() => {
  return (
    <>
      <Typography level="h1">Master</Typography>
      <Tabs defaultValue={0}>
        <TabList>
          <Tab>First tab</Tab>
          <Tab>Second tab</Tab>
          <Tab>Third tab</Tab>
        </TabList>
        <TabPanel value={0}>
          tab
        </TabPanel>
        <TabPanel value={1}>
          <b>Second</b> tab panel
        </TabPanel>
        <TabPanel value={2}>
          <b>Third</b> tab panel
        </TabPanel>
      </Tabs>
    </>
  );
});
