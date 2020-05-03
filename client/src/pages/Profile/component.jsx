import { DefaultPageContainer } from "pages/containers/DefaultPageContainer";
import React from "react";
import { useStyles } from "./styles";
import { getUser } from "core/store/selectors/UserSelectors";
import { connect } from "react-redux";

function ProfilePresentation({ user }) {
  const classes = useStyles();

  return (
    <DefaultPageContainer navigator>
      <div className={classes.root}>Hello {user.email}</div>
    </DefaultPageContainer>
  );
}

const mapStateToProps = (state) => ({
  user: getUser(state)
});

export const Profile = connect(mapStateToProps)(ProfilePresentation);
