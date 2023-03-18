import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CollapsibleTable from "./components/CustomTable";
import { FormDialogAddResource } from "./components/FormDialogAddResource";

export function Resource() {
  const [open, setOpen] = useState(false);
  const handleClickAddResource = () => {
    setOpen(true);
  };
  return (
    <div>
      <FormDialogAddResource open={open} setOpen={setOpen} />
      <Box
        sx={{ margin: "0px 0px 5px 0px" }}
        display="flex"
        justifyItems={"flex-end"}
      >
        {/* <Button
          sx={{ marginLeft: "auto" }}
          className="resourceBtn"
          variant="contained"
          style={{ backgroundColor: "#4486A3" }}
          onClick={handleClickAddResource}
        >
          Add Resources
        </Button> */}
      </Box>
      <CollapsibleTable></CollapsibleTable>
    </div>
  );
}
