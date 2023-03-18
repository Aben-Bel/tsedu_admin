import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { materialProvider } from "../../../../../provider/material-provider";
import useForm from "../../../../../hooks/useForm";
import { validateAddResource } from "../validation/addResourceValidation";
import { refreshPage } from "../../../../../utils/refreshPage";

export function FormDialogAddResource({ open, setOpen }: any) {
  const [formData, setFormData] = useState({});
  const submitFrom = () => {
    materialProvider
      .createMaterial({ ...values, ...formData } as any)
      .then(() => {
        refreshPage();
      });

    setOpen(false);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    submitFrom,
    validateAddResource
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Upload a Resource</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="language"
          label="Langauge"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          error={errors.language}
          helperText={errors.language ? errors.language : ""}
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          error={errors.title}
          helperText={errors.title ? errors.title : ""}
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          error={errors.description}
          helperText={errors.description ? errors.description : ""}
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="category"
          label="Category"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          error={errors.category}
          helperText={errors.category ? errors.category : ""}
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="type"
          label="Type"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          error={errors.type}
          helperText={errors.type ? errors.type : ""}
        />

        <TextField
          autoFocus
          required
          margin="dense"
          id="video_link"
          label="Video Link"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
          error={errors.video_link}
          helperText={errors.video_link ? errors.video_link : ""}
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
          onClick={handleSubmit}
          style={{ color: "white", background: "#4486A3" }}
        >
          Complete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
