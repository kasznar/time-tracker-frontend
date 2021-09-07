import React, { FC, useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  apiAddUserToTeam,
  apiDeleteTeam,
  apiListUsersInTeam,
} from "../api/Teams";
import { Delete } from "@material-ui/icons";
import UserResponse from "../api/Users";
import { AddUserToTeamDialog } from "./AddUserToTeamDialog";

const useStyles = makeStyles({
  buttonContainer: {
    textAlign: "right",
  },
});

export const Team: FC<{
  id: number;
  onDelete: () => void;
}> = ({ id, onDelete }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [teamData, setTeamData] = useState<UserResponse[]>([]);

  const fetchUsers = useCallback(() => {
    apiListUsersInTeam(id).then(setTeamData);
  }, [id, setTeamData]);

  useEffect(() => {
    fetchUsers();
  }, [id, fetchUsers]);

  const deleteTeam = () => {
    apiDeleteTeam(id).then(onDelete);
  };

  const handleAddUser = async (userId: number) => {
    await apiAddUserToTeam(id, userId);
    fetchUsers();
  };

  return (
    <>
      <Grid container justify={"space-between"} alignItems={"center"}>
        <Grid item>
          <Typography>Users</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Add user
          </Button>
        </Grid>
      </Grid>

      <AddUserToTeamDialog
        open={open}
        onClose={() => setOpen(false)}
        onAddUser={handleAddUser}
      />
      <List dense={true}>
        {teamData?.map((user) => (
          <ListItem button key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Box className={classes.buttonContainer}>
        <Button variant="contained" color="secondary" onClick={deleteTeam}>
          Delete Team
        </Button>
      </Box>
    </>
  );
};
