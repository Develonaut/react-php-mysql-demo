import { DefaultPageContainer } from "pages/containers/DefaultPageContainer";
import React from "react";
import { useStyles } from "./styles";

export function Profile() {
  const classes = useStyles();

  return (
    <DefaultPageContainer navigator>
      <div className={classes.root}>Profile</div>
    </DefaultPageContainer>
  );
}
