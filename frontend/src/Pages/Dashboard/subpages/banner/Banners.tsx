import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import AlertDialogBanner from "./components/AlertDialogDeleteBanner";
import { FormDialogAddBanner } from "./components/FormDialogAddBanner";

export function Banners() {
  const [image, setImage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickAddBanner = () => {
    setOpen(true);
  };

  return (
    <div>
      <AlertDialogBanner
        open={alertOpen}
        setOpen={setAlertOpen}
      ></AlertDialogBanner>
      <FormDialogAddBanner open={open} setOpen={setOpen} />
      <Box
        sx={{ margin: "0px 0px 5px 0px" }}
        display="flex"
        justifyItems={"flex-end"}
      >
        {image ? (
          <Button
            sx={{ marginLeft: "auto" }}
            className="resourceBtn"
            variant="contained"
            style={{ backgroundColor: "#4486A3" }}
            onClick={() => {
              setAlertOpen(true);
            }}
          >
            Remove Banner
          </Button>
        ) : (
          <Button
            sx={{ marginLeft: "auto" }}
            className="resourceBtn"
            variant="contained"
            style={{ backgroundColor: "#4486A3" }}
            onClick={handleClickAddBanner}
          >
            Add Banner
          </Button>
        )}
      </Box>
      <Box
        sx={{
          p: 2,
          border: "3px dashed grey",
          height: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {image ? (
          <img src={image}></img>
        ) : (
          <p
            style={{
              alignSelf: "center",
              color: "#4486A3",
              fontSize: "24px",
              margin: "0px 0px 0px 20px",
            }}
          >
            No Active Banner
          </p>
        )}
      </Box>
    </div>
  );
}
