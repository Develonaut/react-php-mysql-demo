import * as MUI from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export function AppBar({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <MUI.AppBar className={classes.root} {...restProps}>
      {children}
    </MUI.AppBar>
  );
}
