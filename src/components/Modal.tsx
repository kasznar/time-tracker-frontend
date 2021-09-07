import React, { FC, ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from "@material-ui/core";

export interface ModalAction {
  title: string;
  cb: () => void;
}

interface ModalProps {
  title: string;
  children: ReactNode;
  actions: ModalAction[];
  open: boolean;
  onClose: () => void;
  maxWidth?: DialogProps["maxWidth"];
  fullWidth?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const fullWidth = props.fullWidth ?? false;
  const maxWidth = props.maxWidth ?? "sm";

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        {props.actions.map((action) => (
          <Button onClick={action.cb} color="primary" key={action.title}>
            {action.title}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};
