import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from "./AlertDialogDelete";
import { useState } from "react";
import { FormDialogEditResource } from "./FormDialogEditResource";

export function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [deleteRes, setDeleteRes] = useState({});
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [editData, setEditData] = useState({});

  function handleEditClick(row: any) {
    setEditFormOpen(true);
    setEditData(row);
  }

  function contructObjectURL(obj: any) {
    try {
      return window.URL.createObjectURL(
        new Blob([Uint8Array.from(obj.buffer.data).buffer], {
          type: obj.mimetype,
        })
      );
    } catch (e) {
      return "";
    }
  }

  const handleClickOpen = (data: any) => {
    setAlertOpen(true);
    setDeleteRes(data);
  };

  return (
    <div>
      <AlertDialog
        open={alertOpen}
        setOpen={setAlertOpen}
        data={deleteRes}
      ></AlertDialog>

      <FormDialogEditResource
        open={editFormOpen}
        setOpen={setEditFormOpen}
        data={editData}
        setData={setEditData}
      />

      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              console.log();
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="left">{row.language}</TableCell>
        <TableCell align="left">{row.title}</TableCell>
        <TableCell align="left">{row.description}</TableCell>
        <TableCell align="left">{row.category}</TableCell>
        <TableCell align="left">{row.type}</TableCell>
        <TableCell align="center" style={{ width: "60px" }}>
          <IconButton
            onClick={() => {
              handleEditClick(row);
            }}
          >
            <EditIcon style={{ color: "#4486A3" }} />
          </IconButton>
        </TableCell>
        <TableCell align="center" style={{ width: "60px" }}>
          <IconButton
            onClick={() => {
              handleClickOpen({ title: row.title, id: row.id });
            }}
          >
            <DeleteIcon style={{ color: "#4486A3", fontWeight: "30px" }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Files
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Video</TableCell>
                    <TableCell align="left">Video Link</TableCell>
                    <TableCell align="left">Book</TableCell>
                    <TableCell align="left">Audio</TableCell>
                    <TableCell align="left">Thumbnail</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">
                      {typeof window !== "undefined" && row.video ? (
                        <a
                          href={contructObjectURL(row.video)}
                          download={row.video.originalname}
                        >
                          {row.video.originalname}
                        </a>
                      ) : (
                        <div>No data</div>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {row.videoLink ? (
                        <a href={row.videoLink} />
                      ) : (
                        <div>No Link</div>
                      )}
                    </TableCell>

                    <TableCell align="left">
                      {typeof window !== "undefined" && row.book ? (
                        <a
                          href={contructObjectURL(row.book)}
                          download={row.book.originalname}
                        >
                          {row.book.originalname}
                        </a>
                      ) : (
                        <div>No data</div>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {typeof window !== "undefined" && row.audio ? (
                        <a
                          href={contructObjectURL(row.audio)}
                          download={row.audio.originalname}
                        >
                          {row.audio.originalname}
                        </a>
                      ) : (
                        <div>No data</div>
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {typeof window !== "undefined" &&
                      typeof row.thumbnail ===
                        typeof { buffer: { data: ArrayBuffer } } ? (
                        <a
                          href={contructObjectURL(row.thumbnail)}
                          download={row.thumbnail.originalname}
                        >
                          {row.thumbnail.originalname}
                        </a>
                      ) : (
                        <div>No data</div>
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </div>
  );
}
