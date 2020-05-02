import React from "react";
import * as MUI from "@material-ui/core";
import { useField } from "formik";
import { useStyles } from "./styles";

export function Checkbox({ children, ...restProps }) {
  const classes = useStyles();
  const [{ value, ...restField }] = useField(restProps);
  return (
    <MUI.FormControlLabel
      control={<MUI.Checkbox {...restField} className={classes.root} checked={value} />}
      label={restProps.label}
    />
  );
}
