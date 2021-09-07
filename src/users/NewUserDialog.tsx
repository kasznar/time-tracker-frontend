import React, { FC, useCallback, useState } from "react";
import { NewUserForm, NewUserFormData } from "./NewUserForm";
import axios from "axios";
import { Modal, ModalAction } from "../components/Modal";

export const NewUserDialog: FC<{
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
}> = ({ open, onClose, onCreate }) => {
  const [formData, setFormData] = useState<NewUserFormData | undefined>(
    undefined
  );

  const handleSubmit = () => {
    axios.post("/users/create", formData).then(onCreate);
  };

  const handleFormChange = useCallback((data) => setFormData(data), []);

  const actions: ModalAction[] = [
    { title: "Cancel", cb: onClose },
    { title: "Create", cb: handleSubmit },
  ];

  return (
    <Modal open={open} onClose={onClose} actions={actions} title="New user">
      <NewUserForm onFormChange={handleFormChange} />
    </Modal>
  );
};
