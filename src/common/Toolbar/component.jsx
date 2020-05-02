import React from "react";
import * as MUI from "@material-ui/core";
import { useStyles } from "./styles";

export function Toolbar({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <MUI.Toolbar className={classes.root} {...restProps}>
      {children}
    </MUI.Toolbar>
  );
}
