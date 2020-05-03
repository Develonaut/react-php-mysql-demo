import { createSelector } from "reselect";

const UserSelector = ({ user }) => user;
const AuthenticatedSelector = ({ user }) => user.isAuthenticated;

export const getUser = createSelector([UserSelector], (user) => user);
export const getIsAuthenticated = createSelector(
  [AuthenticatedSelector],
  (isAuthenticated) => isAuthenticated
);
