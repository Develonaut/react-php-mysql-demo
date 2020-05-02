import React from "react";
import * as ReactRouterDom from "react-router-dom";
import { useStyles } from "./styles";

export function Link({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <ReactRouterDom.Link className={classes.root} {...restProps}>
      {children}
    </ReactRouterDom.Link>
  );
}
