import * as MUI from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export function Typography({ children, value, ...restProps }) {
  const classes = useStyles();
  return (
    <MUI.Typography className={classes.root} {...restProps}>
      {value || children}
    </MUI.Typography>
  );
}
