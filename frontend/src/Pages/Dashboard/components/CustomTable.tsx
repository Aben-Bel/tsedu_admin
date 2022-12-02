import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from "./AlertDialogDelete";
import { useState } from "react";
import { FormDialogEditResource } from "./FormDialogEditResource";

function Row(props: { row: any }) {
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
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default function CollapsibleTable({ rows }: { rows: any[] }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const currentRows = rows.filter((r, ind) => {
    return ind >= rowsPerPage * page && ind < rowsPerPage * (page + 1);
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead style={{ backgroundColor: "#4486A3" }}>
            <TableRow>
              <TableCell />

              <TableCell style={{ color: "white" }}>id</TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Langauge
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Title
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Description
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Category
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Type
              </TableCell>
              <TableCell style={{ color: "white" }} align="left"></TableCell>
              <TableCell style={{ color: "white" }} align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row: any) => (
              <Row key={Number(row.id)} row={row} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
