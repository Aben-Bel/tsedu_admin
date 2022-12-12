import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

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

export default function SettingPage() {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const category = ["Change Password"];

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
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Change Password" {...a11yProps(0)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="Email"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
          />

          <TextField
            required
            margin="dense"
            id="old_password"
            label="Old Password"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
          />

          <TextField
            required
            margin="dense"
            id="new_password"
            label="New Password"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
          />

          <TextField
            required
            margin="dense"
            id="new_password"
            label="Confirm New Password"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
          />
          <Button
            // onClick={}
            style={{
              color: "white",
              background: "#4486A3",
              margin: "30px 0px",
              marginLeft: "auto",
            }}
          >
            Change Password
          </Button>
        </div>
      </TabPanel>
    </Box>
  );
}
