import React, { useState } from "react";
import * as MUI from "@material-ui/core";
import { useField } from "formik";
import { useFieldMeta } from "core/hooks/useFieldMeta";
import { IconButton } from "common/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useStyles } from "./styles";

export function TextField({ children, type, ...restProps }) {
  const classes = useStyles();
  const [field, meta] = useField(restProps);
  const [error, helperText] = useFieldMeta(meta);
  const [fieldType, setFieldType] = useState(type);

  function toggleType() {
    setFieldType((prevType) => (prevType === "password" ? "text" : "password"));
  }

  const passwordProps = {
    endAdornment: (
      <MUI.InputAdornment position="end">
        <IconButton aria-label="toggle password visibility" onClick={toggleType} edge="end">
          {type === "password" ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </MUI.InputAdornment>
    ),
    labelWidth: 70
  };

  return (
    <MUI.TextField
      {...field}
      variant="outlined"
      margin="normal"
      error={error}
      type={fieldType}
      className={classes.root}
      helperText={helperText}
      InputProps={{
        className: classes.base,
        ...(fieldType === "password" ? passwordProps : {})
      }}
      {...restProps}
    >
      {children}
    </MUI.TextField>
  );
}
