import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export function FormDialogAddResource({ open, setOpen }: any) {
  const [formData, setFormData] = useState({});
  const handleClose = () => {
    console.log(formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Upload a Resource</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e: any) => {
            const data = { ...formData, title: e.target.value };
            setFormData(data);
          }}
        />

        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e: any) => {
            const data = { ...formData, description: e.target.value };
            setFormData(data);
          }}
        />

        <TextField
          autoFocus
          margin="dense"
          id="category"
          label="Category"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e: any) => {
            const data = { ...formData, category: e.target.value };
            setFormData(data);
          }}
        />

        <TextField
          autoFocus
          margin="dense"
          id="type"
          label="Type"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e: any) => {
            const data = { ...formData, type: e.target.value };
            setFormData(data);
          }}
        />

        <TextField
          autoFocus
          margin="dense"
          id="videoLink"
          label="Video Link"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e: any) => {
            const data = { ...formData, videoLink: e.target.value };
            setFormData(data);
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Upload Thumbnail</p>
          <input
            type="file"
            onChange={(e: any) => {
              const data = { ...formData, thumbnail: e.target.files[0] };
              setFormData(data);
            }}
          />

          <p style={{ fontWeight: "bold" }}>Upload Video File</p>
          <input
            type="file"
            onChange={(e: any) => {
              const data = { ...formData, video: e.target.files[0] };
              setFormData(data);
            }}
          />

          <p style={{ fontWeight: "bold" }}>Upload Audio File</p>
          <input
            type="file"
            onChange={(e: any) => {
              const data = { ...formData, audio: e.target.files[0] };
              setFormData(data);
            }}
          />

          <p style={{ fontWeight: "bold" }}>Upload Book File</p>
          <input
            type="file"
            onChange={(e: any) => {
              const data = { ...formData, book: e.target.files[0] };
              setFormData(data);
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleClose}
          style={{ color: "white", background: "#4486A3" }}
        >
          Complete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
