import React, { FC, useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { TeamsDto } from "../api/Teams";
import { Team } from "./Team";

export const TeamRow: FC<{ team: TeamsDto; onDelete: () => void }> = ({
  team,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={team.id}>
        <TableCell component="th" scope="row">
          {team.id}
        </TableCell>
        <TableCell>{team.name}</TableCell>
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
              <Team id={team.id} onDelete={onDelete} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
