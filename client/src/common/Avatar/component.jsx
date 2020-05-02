import React from "react";
import * as MUI from "@material-ui/core";
import { useStyles } from "./styles";

export function Avatar({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <MUI.Avatar className={classes.root} {...restProps}>
      {children}
    </MUI.Avatar>
  );
}
