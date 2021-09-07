import React, { FC, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export interface NewUserFormData {
  email: string;
  name: string;
  userType: string;
}

export const NewUserForm: FC<{
  onFormChange: (data: NewUserFormData) => void;
}> = ({ onFormChange }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    onFormChange({ email, name, userType });
  }, [email, name, userType, onFormChange]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        required
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormControl required>
        <InputLabel id="user-type-label">User type</InputLabel>
        <Select
          labelId="user-type-label"
          id="type"
          value={userType}
          onChange={(e) => setUserType(e.target.value as string)}
        >
          <MenuItem value={"employee"}>Employee</MenuItem>
          <MenuItem value={"team-lead"}>Team lead</MenuItem>
          <MenuItem value={"hr"}>HR🪄</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};
