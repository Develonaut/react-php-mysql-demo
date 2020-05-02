import React from "react";
import { useStyles } from "./styles";
import * as MUI from "@material-ui/core";

export function Paper({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <MUI.Paper className={classes.root} {...restProps}>
      {children}
    </MUI.Paper>
  );
}
