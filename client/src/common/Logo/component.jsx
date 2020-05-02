import React from "react";
import { useStyles } from "./styles";

export function Logo() {
  const classes = useStyles();
  return <div className={classes.root}>Logo</div>;
}
