import React from "react";
import * as MUI from "@material-ui/core";
import { useStyles } from "./styles";

export function IconButton({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <MUI.IconButton className={classes.root} {...restProps}>
      {children}
    </MUI.IconButton>
  );
}
