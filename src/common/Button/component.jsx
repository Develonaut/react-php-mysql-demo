import * as MUI from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export function Button({ children, to, ...restProps }) {
  const classes = useStyles();
  const component = to ? { component: Link } : {};
  return (
    <MUI.Button className={classes.root} to={to} {...component} {...restProps}>
      {children}
    </MUI.Button>
  );
}
