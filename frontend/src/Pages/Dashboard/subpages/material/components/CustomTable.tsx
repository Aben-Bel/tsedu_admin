import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { Row } from "./Row";
import { useEffect } from "react";
import { materialProvider } from "../../../../../provider/material";

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState<any[]>([]);

  useEffect(() => {
    materialProvider.get({ page, rowsPerPage }).then((data) => {
      setRows(data.map((item) => ({ ...item })));
    });
  }, []);

  useEffect(() => {
    materialProvider.get({ page, rowsPerPage }).then((data) => {
      setRows(data.map((item) => ({ ...item })));
    });
  }, [page, rowsPerPage]);

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
            {rows.length == 0 ? (
              <TableRow>
                <p
                  style={{
                    color: "#4486A3",
                    fontSize: "24px",
                    margin: "0px 0px 0px 20px",
                  }}
                >
                  No Resource
                </p>
              </TableRow>
            ) : (
              rows.map((row: any) => (
                <Row key={Number(row.id)} row={row} />
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
