import { AppBar, Button, makeStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    marginRight: theme.spacing(1),
    textDecoration: "none",
  },
}));

export const Menu = () => {
  const classes = useStyles();
  const navLinks = [
    {
      url: "/users",
      title: "Users",
    },
    {
      url: "/teams",
      title: "Teams",
    },
    {
      url: "/workdays",
      title: "Workdays",
    },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <nav className={classes.nav}>
          {navLinks.map((link) => (
            <Link className={classes.link} to={link.url} key={link.url}>
              <Button color="inherit">{link.title}</Button>
            </Link>
          ))}
        </nav>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
