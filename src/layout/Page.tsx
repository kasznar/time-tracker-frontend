import React, { FC } from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginBottom: 40,
  },
});

export const Page: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <>{children}</>
    </Container>
  );
};
