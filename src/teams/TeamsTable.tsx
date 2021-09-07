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
import { TeamsResponse } from "../api/Teams";
import { TeamRow } from "./TeamRow";

export const TeamsTable: FC<{ teams: TeamsResponse; onDelete: () => void }> = ({
  teams,
  onDelete,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((row) => (
            <TeamRow team={row} key={row.id} onDelete={onDelete} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
