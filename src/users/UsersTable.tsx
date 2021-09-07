import React, { FC } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { UserRow } from "./UserRow";
import UserResponse from "../api/Users";

export const UsersTable: FC<{ users: UserResponse[]; onDelete: () => void }> =
  ({ users, onDelete }) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">type</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <UserRow user={row} key={row.id} onDelete={onDelete} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
