import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Collapse, TableCell, TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import { materialProvider } from "../../../../../provider/material-provider";
import { FormDialogEditResource } from "./FormDialogEditResource";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AlertDialog from "./AlertDialogDelete";
import { constructObjectURL } from "../../../../../utils/contructObjectURL";

export default function CollapsibleTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState<any[]>([]);

  const [alertOpen, setAlertOpen] = useState(false);
  const [deleteRes, setDeleteRes] = useState({});
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [editData, setEditData] = useState({});

  function handleEditClick(row: any) {
    setEditData(row);
    setEditFormOpen(true);
  }

  const handleClickOpen = (data: any) => {
    setAlertOpen(true);
    setDeleteRes(data);
  };

  useEffect(() => {
    materialProvider.get({ page, rowsPerPage }).then((data) => {
      setRows(data.map((item) => ({ ...item })));
    });
  }, []);

  useEffect(() => {
    materialProvider.get({ page, rowsPerPage }).then((data) => {
      // console.log("DATA: ", data);
      // console.log("Book: ", data[0].book);
      // console.log("Type: ", typeof data[0].book);
      // console.log("Book.data: ", data[0].book.data);
      setRows(data.map((item) => ({ ...item })));
    });
  }, [page, rowsPerPage, editFormOpen, alertOpen]);

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
            {rows.length == 0 ? (
              <span
                style={{
                  color: "#4486A3",
                  fontSize: "24px",
                  margin: "0px 0px 0px 20px",
                }}
              >
                No Resource
              </span>
            ) : (
              rows.map((row: any) => (
                <Row
                  row={row}
                  handleEditClick={handleEditClick}
                  handleClickOpen={handleClickOpen}
                />
              ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={200}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
function Row(props: any) {
  const { row, handleClickOpen, handleEditClick } = props;
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
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
                          href={constructObjectURL(row.video)}
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
                        <a href={row.videoLink}>{row.videoLink}</a>
                      ) : (
                        <div>No Link</div>
                      )}
                    </TableCell>

                    <TableCell align="left">
                      {typeof window !== "undefined" && row.book ? (
                        <a
                          href={constructObjectURL(row.book)}
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
                          href={constructObjectURL(row.audio)}
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
                      row.thumbnail &&
                      typeof row.thumbnail ===
                        typeof { buffer: { data: ArrayBuffer } } ? (
                        <a
                          href={constructObjectURL(row.thumbnail)}
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
