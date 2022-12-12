import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, Paper, TextField } from "@mui/material";
import { materialProvider } from "../../../../provider/material-provider";
import { refreshPage } from "../../../../utils/refreshPage";
import { validateAddResource } from "../material/validation/addResourceValidation";
import useForm from "../../../../hooks/useForm";

export function AddResourcePanel({ category }: any) {
  const [formData, setFormData] = React.useState({});
  const submitFrom = () => {
    console.log("data panel: ", { ...values, ...formData, category: category });
    // materialProvider
    //   .createMaterial({ ...values, ...formData } as any)
    //   .then(() => {
    //     refreshPage();
    //   });
  };
  const { values, errors, handleChange, handleSubmit } = useForm(
    submitFrom,
    validateAddResource
  );

  return (
    <Paper
      elevation={6}
      style={{ padding: "42px 24px 6px 24px", margin: "2px" }}
    >
      <div>
        <Typography>{category} Content Addition Form</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <TextField
            autoFocus
            required
            margin="dense"
            id="language"
            label="Langauge"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
            onChange={handleChange}
            error={errors.language}
            helperText={errors.language ? errors.language : ""}
          />

          <TextField
            required
            margin="dense"
            id="title"
            label="Title"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
            onChange={handleChange}
            error={errors.title}
            helperText={errors.title ? errors.title : ""}
          />

          <TextField
            required
            margin="dense"
            id="description"
            label="Description"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
            onChange={handleChange}
            error={errors.description}
            helperText={errors.description ? errors.description : ""}
          />

          <TextField
            required
            margin="dense"
            id="type"
            label="Type"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
            onChange={handleChange}
            error={errors.type}
            helperText={errors.type ? errors.type : ""}
          />

          <TextField
            required
            margin="dense"
            id="videoLink"
            label="Video Link"
            type="text"
            style={{ width: "800px" }}
            variant="standard"
            onChange={handleChange}
            error={errors.videoLink}
            helperText={errors.videoLink ? errors.videoLink : ""}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <p style={{ fontWeight: "bold" }}>Upload Thumbnail</p>
            <input
              type="file"
              onChange={(e: any) => {
                const data = {
                  ...formData,
                  thumbnail: e.target.files[0],
                };
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
          </div>
          <div>
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
        </div>
        <div style={{ display: "flex" }}>
          <Button
            onClick={handleSubmit}
            style={{
              color: "white",
              background: "#4486A3",
              margin: "30px",
              marginLeft: "auto",
            }}
          >
            Add Content
          </Button>
        </div>
      </div>
    </Paper>
  );
}
