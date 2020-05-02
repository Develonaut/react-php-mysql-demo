import { getIsAuthenticated } from "core/store/selectors/UserSelectors";
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { PATHS } from "../urls";

function ProtectedRouteComponent({ children: _, isAuthenticated, render, ...rest }) {
  if (isAuthenticated) return <Route {...rest} render={render} />;
  return (
    <Redirect
      to={{
        pathname: PATHS.LOGIN,
        state: {
          from: rest.location
        }
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state)
});

export const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteComponent);
