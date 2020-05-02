import React from "react";
import * as MUI from "@material-ui/core";
import { useStyles } from "./styles";

export function Grid({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <MUI.Grid className={classes.root} {...restProps}>
      {children}
    </MUI.Grid>
  );
}
