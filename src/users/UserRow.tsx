import React, { FC, useState } from "react";

import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { User } from "./User";
import UserResponse from "../api/Users";

export const UserRow: FC<{ user: UserResponse; onDelete: () => void }> = ({
  user,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={user.id}>
        <TableCell component="th" scope="row">
          {user.id}
        </TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell align="right">{user.userType}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <User id={user.id} onDelete={onDelete} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
