import React, { useState, useEffect } from "react";
import { Box, Button, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import "./Dashboard.css";
import { Banners } from "./subpages/banner/Banners";
import { Resource } from "./subpages/material/Resource";
import AddResources from "./subpages/addResources/AddResource";
import SettingPage from "./subpages/setting/SettingsPage";

export function Dashboard({ setIsLoggedIn }: any) {
  const [value, setValue] = useState("1");

  const pageText = ["Resource Upload", "", "Banner Upload", ""];

  function handleChange(e: React.SyntheticEvent, newValue: string): void {
    setValue(newValue);
  }

  return (
    <div className="">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList className="tabList" onChange={handleChange}>
            <Tab className="tabItem" label="Resources" value="1" />
            <Tab className="tabItem" label="Add Resources" value="2" />
            <Tab className="tabItem" label="Banners" value="3" />
            <Tab className="tabItem" label="Settings" value="4" />
            <Button
              style={{
                marginLeft: "auto",
                color: "#4486A3",
              }}
              onClick={() => {
                sessionStorage.removeItem("token");
                setIsLoggedIn(false);
              }}
            >
              Logout
            </Button>
          </TabList>
        </Box>
        <p
          style={{
            color: "#4486A3",
            fontSize: "24px",
            margin: "0px 0px 0px 20px",
            fontWeight: "bold",
          }}
        >
          {pageText[Number(value) - 1]}
        </p>

        <TabPanel value="1">
          <Resource />
        </TabPanel>
        <TabPanel value="2">
          <AddResources></AddResources>
        </TabPanel>
        <TabPanel value="3">
          <Banners></Banners>
        </TabPanel>
        <TabPanel value="4">
          <SettingPage></SettingPage>
        </TabPanel>
      </TabContext>
    </div>
  );
}
