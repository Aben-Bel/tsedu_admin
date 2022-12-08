import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
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
import { constructObjectURL } from "../../../../../utils/contructObjectURL";

export function Row(props: { row: any }) {
  const { row } = props;
  

  return (
      <TableRow>
    

      </TableRow>
  );
}
