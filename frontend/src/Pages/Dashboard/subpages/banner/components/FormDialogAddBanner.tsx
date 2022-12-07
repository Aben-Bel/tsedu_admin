import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { materialProvider } from "../../../../../provider/material";

export function FormDialogAddBanner({ open, setOpen }: any) {
  const [formData, setFormData] = useState({});
  const submitFrom = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Upload Banner</p>
          <input
            type="file"
            onChange={(e: any) => {
              const data = { ...formData, thumbnail: e.target.files[0] };
              setFormData(data);
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={submitFrom}
          style={{ color: "white", background: "#4486A3" }}
        >
          Complete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
