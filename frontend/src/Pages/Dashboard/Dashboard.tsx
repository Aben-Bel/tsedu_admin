import React, { useState, useEffect } from "react";
import { Box, Button, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CollapsibleTable from "./subpages/material/components/CustomTable";
import "./Dashboard.css";
import { FormDialogAddResource } from "./subpages/material/components/FormDialogAddResource";
import { materialProvider } from "../../provider/material";

export function Dashboard({ setIsLoggedIn }: any) {
  const [value, setValue] = useState("1");
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<any[]>([]);

  const pageText = ["Resource Upload", "Banner Upload", "Change Password"];

  const handleClickAddResource = () => {
    setOpen(true);
  };

  useEffect(() => {
    setRows([]);
  }, []);

  function handleChange(e: React.SyntheticEvent, newValue: string): void {
    setValue(newValue);
  }

  return (
    <div className="">
      <FormDialogAddResource open={open} setOpen={setOpen} />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList className="tabList" onChange={handleChange}>
            <Tab className="tabItem" label="Resources" value="1" />
            <Tab className="tabItem" label="Banners" value="2" />
            <Tab className="tabItem" label="Settings" value="3" />
            <Button
              style={{
                marginLeft: "auto",
                color: "#4486A3",
              }}
              onClick={() => {
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
          <Box
            sx={{ margin: "0px 0px 5px 0px" }}
            display="flex"
            justifyItems={"flex-end"}
          >
            <Button
              sx={{ marginLeft: "auto" }}
              className="resourceBtn"
              variant="contained"
              style={{ backgroundColor: "#4486A3" }}
              onClick={handleClickAddResource}
            >
              Add Resources
            </Button>
          </Box>
          <CollapsibleTable></CollapsibleTable>
        </TabPanel>
        <TabPanel value="2">Banners</TabPanel>
        <TabPanel value="3">Settings</TabPanel>
      </TabContext>
    </div>
  );
}
