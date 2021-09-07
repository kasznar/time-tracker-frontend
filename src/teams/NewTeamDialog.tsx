import React, { FC, useState } from "react";
import { Modal, ModalAction } from "../components/Modal";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { apiCreateTeam } from "../api/Teams";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const NewTeamDialog: FC<{
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}> = ({ open, onClose, onCreate }) => {
  const classes = useStyles();

  const [name, setName] = useState("");

  const handleSubmit = () => {
    apiCreateTeam(name).then(onCreate);
  };

  const actions: ModalAction[] = [
    { title: "Cancel", cb: onClose },
    { title: "Create", cb: handleSubmit },
  ];

  return (
    <Modal open={open} onClose={onClose} actions={actions} title="New team">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </Modal>
  );
};
