import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AddResourcePanel } from "./AddResourcePanel";
import "./addResourcesPage.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingLeft: "24px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AddResources() {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const category = [
    "Community",
    "Student",
    "Health Officer",
    "Media",
    "Religious Figures",
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChangeTab}
        sx={{ borderRight: 1, borderColor: "divider", color: "#4486A3" }}
        className="tabListRes"
      >
        <Tab className="tabItemRes" label="Community" {...a11yProps(0)} />
        <Tab className="tabItemRes" label="Student" {...a11yProps(1)} />
        <Tab className="tabItemRes" label="Health Officer" {...a11yProps(2)} />
        <Tab className="tabItemRes" label="Media" {...a11yProps(3)} />
        <Tab className="tabItemRes" label="Religious Figures" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <AddResourcePanel category={category[0]}></AddResourcePanel>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddResourcePanel category={category[1]}></AddResourcePanel>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddResourcePanel category={category[2]}></AddResourcePanel>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AddResourcePanel category={category[3]}></AddResourcePanel>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AddResourcePanel category={category[4]}></AddResourcePanel>
      </TabPanel>
    </Box>
  );
}
