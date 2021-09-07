import React, { FC, useEffect, useState } from "react";
import { Modal, ModalAction } from "../components/Modal";
import UserResponse, { apiListUsers } from "../api/Users";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

export const AddUserToTeamDialog: FC<{
  open: boolean;
  onClose: () => void;
  onAddUser: (id: number) => void;
}> = (props) => {
  const [users, setUsers] = useState<UserResponse[]>([]);

  useEffect(() => {
    apiListUsers().then(setUsers);
  }, []);

  const actions: ModalAction[] = [{ title: "Cancel", cb: props.onClose }];

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      actions={actions}
      title="Add user to team"
      fullWidth={true}
      maxWidth={"sm"}
    >
      <List dense={true}>
        {users?.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="add"
                onClick={() => props.onAddUser(user.id)}
              >
                <Add />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Modal>
  );
};
