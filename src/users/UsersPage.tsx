import React, { useEffect, useState } from "react";
import { UsersTable } from "./UsersTable";
import { Button, makeStyles } from "@material-ui/core";
import { NewUserDialog } from "./NewUserDialog";
import { Page } from "../layout/Page";
import UserResponse, { apiListUsers } from "../api/Users";

const useStyles = makeStyles({
  button: {
    marginBottom: 10,
  },
});

export const UsersPage = () => {
  const classes = useStyles();

  const [users, setUsers] = useState<UserResponse[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    apiListUsers().then(setUsers);
  };

  const onCreate = () => {
    fetchUsers();
    setDialogOpen(false);
  };

  return (
    <Page>
      <NewUserDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onCreate={onCreate}
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => setDialogOpen(true)}
      >
        Create user
      </Button>
      <UsersTable users={users} onDelete={fetchUsers} />
    </Page>
  );
};
