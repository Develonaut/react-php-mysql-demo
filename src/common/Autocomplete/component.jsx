import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./styles";

export function Autocomplete({ options }) {
  const classes = useStyles();
  return (
    <Autocomplete
      className={classes.root}
      freeSolo
      disableClearable
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          margin="normal"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: "search"
          }}
        />
      )}
    />
  );
}
