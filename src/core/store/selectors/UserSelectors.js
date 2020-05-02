import { createSelector } from "reselect";

const AuthenticatedSelector = ({ user }) => user.isAuthenticated;

export const getIsAuthenticated = createSelector(
  [AuthenticatedSelector],
  (isAuthenticated) => isAuthenticated
);
