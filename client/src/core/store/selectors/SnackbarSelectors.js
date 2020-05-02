import { createSelector } from "reselect";

// Selectors
const SnackbarsSelector = ({ snackbars }) => snackbars.notifications;

export const getSnackbars = createSelector([SnackbarsSelector], (snackbars) => snackbars);
