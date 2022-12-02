import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export function FormDialogEditResource({ open, setOpen, data, setData }: any) {
  const handleClose = () => {
    console.log(data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit a Resource</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="language"
          label="Language"
          type="text"
          fullWidth
          variant="standard"
          value={data.language}
          onChange={(e: any) => {
            setData({ ...data, language: e.target.value });
          }}
        />

        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={data.title}
          onChange={(e: any) => {
            setData({ ...data, title: e.target.value });
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
          value={data.description}
          onChange={(e: any) => {
            setData({ ...data, description: e.target.value });
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
          value={data.category}
          onChange={(e: any) => {
            setData({ ...data, category: e.target.value });
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
          value={data.type}
          onChange={(e: any) => {
            setData({ ...data, type: e.target.value });
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
          value={data.videoLink}
          onChange={(e: any) => {
            setData({ ...data, videoLink: e.target.value });
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
              setData({ ...data, thumbnail: e.target.files[0] });
            }}
          />

          <p style={{ fontWeight: "bold" }}>Upload Video File</p>
          <input
            type="file"
            onChange={(e: any) => {
              setData({ ...data, video: e.target.files[0] });
            }}
          />

          <p style={{ fontWeight: "bold" }}>Upload Audio File</p>
          <input
            type="file"
            onChange={(e: any) => {
              setData({ ...data, audio: e.target.files[0] });
            }}
          />

          <p style={{ fontWeight: "bold" }}>Upload Book File</p>
          <input
            type="file"
            onChange={(e: any) => {
              setData({ ...data, book: e.target.files[0] });
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
