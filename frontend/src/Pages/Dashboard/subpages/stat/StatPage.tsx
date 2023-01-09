import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  TextField,
} from "@mui/material";
import { PieChart } from "react-minimal-pie-chart";

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

const PieChartComponent = ({ data, title }: any) => {
  return (
    <Card sx={{ width: 350, height: 400 }}>
      <CardActionArea>
        <PieChart
          data={data}
          style={{
            fontFamily:
              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: "3px",
            fontWeight: "bolder",
          }}
          label={({ dataEntry }) =>
            dataEntry.title + " " + Math.round(dataEntry.percentage) + "%"
          }
          labelStyle={{
            fill: "#fff",
            opacity: 0.75,
            pointerEvents: "none",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default function StatPage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", gap: 1 }}>
        <PieChartComponent
          data={[
            { title: "Male", value: 10, color: "#E38627" },
            { title: "Female", value: 15, color: "#C13C37" },
          ]}
          title="Gender"
        />
        <PieChartComponent
          data={[
            { title: "Student", value: 10, color: "#E38627" },
            { title: "Community", value: 15, color: "#C13C37" },
            { title: "Health office", value: 20, color: "#6A2135" },
            { title: "Media", value: 15, color: "#003f5c" },
            { title: "Religiou figure", value: 20, color: "#2f4b7c" },
          ]}
          title="Users"
        />
        <PieChartComponent
          data={[
            { title: "Sight Challenged", value: 10, color: "#E38627" },
            { title: "Hearing Impaired", value: 15, color: "#C13C37" },
            {
              title: "Sight And Hearing Challenged",
              value: 20,
              color: "#6A2135",
            },
            { title: "Disability", value: 15, color: "#003f5c" },
          ]}
          title="Abilities"
        />
        <PieChartComponent
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
            { title: "four", value: 10, color: "#003f5c" },
            { title: "five", value: 15, color: "#2f4b7c" },
            { title: "six", value: 20, color: "#ffa600" },
            { title: "seven", value: 10, color: "#ff7c43" },
            { title: "eight", value: 15, color: "#f95d6a" },
            { title: "nine", value: 20, color: "#d45087" },
            { title: "ten", value: 10, color: "#a05195" },
            { title: "eleven", value: 15, color: "#665191" },
            { title: "twelve", value: 20, color: "#00AF82" },
          ]}
          title="Region"
        />
      </Stack>
    </Box>
  );
}
