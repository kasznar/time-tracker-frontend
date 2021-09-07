import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

type UserProps = {
  id: number;
  onDelete: () => void;
};

export const User: FC<UserProps> = ({ id, onDelete }) => {
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    axios.get(`/users/${id}`).then(function (response) {
      setUserData(response.data);
    });
  }, [id]);

  const deleteUser = () => {
    axios.delete(`/users/${id}`).then(() => onDelete());
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={deleteUser}>
        Delete user
      </Button>
      <pre>{JSON.stringify(userData, null, 4)}</pre>
    </>
  );
};
