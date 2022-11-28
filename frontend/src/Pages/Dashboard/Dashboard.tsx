import React, { useState } from "react";
import { Box, Button, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CollapsibleTable from "./components/CustomTable";
import "./Dashboard.css";
import { FormDialogAddResource } from "./components/FormDialogAddResource";

export function Dashboard({ setIsLoggedIn }: any) {
         const [value, setValue] = useState("1");
         const [open, setOpen] = useState(false);

         const pageText = [
           "Resource Upload",
           "Banner Upload",
           "Change Password",
         ];

         const handleClickOpen = () => {
           setOpen(true);
         };

         function handleChange(
           e: React.SyntheticEvent,
           newValue: string
         ): void {
           setValue(newValue);
         }

         function createData(
           id: string,
           title: string,
           description: string,
           category: string,
           type: string,
           video: File | undefined,
           videoLink: string,
           book: File | undefined,
           audio: File | undefined,
           thumbnail: File | undefined
         ) {
           return {
             id,
             title,
             description,
             category,
             type,
             files: [
               {
                 video: video,
                 videoLink: videoLink,
                 book: book,
                 audio: audio,
                 thumbnail: thumbnail,
               },
             ],
           };
         }

         const rows = [
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
           createData(
             "1",
             "Title",
             "Desc",
             "Category",
             "Type",
             undefined,
             "",
             undefined,
             undefined,
             undefined
           ),
         ];

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
               <Box
                 sx={{ margin: "5px 50px 5px 0px" }}
                 display="flex"
                 justifyItems={"flex-end"}
               >
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
                 <Button
                   sx={{ marginLeft: "auto" }}
                   className="resourceBtn"
                   variant="contained"
                   style={{ backgroundColor: "#4486A3" }}
                   onClick={handleClickOpen}
                 >
                   Add Resources
                 </Button>
               </Box>
               <TabPanel value="1">
                 <CollapsibleTable rows={rows}></CollapsibleTable>
               </TabPanel>
               <TabPanel value="2">Banners</TabPanel>
               <TabPanel value="3">Settings</TabPanel>
             </TabContext>
           </div>
         );
       }
