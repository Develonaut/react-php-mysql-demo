import produce from "immer";
import { SNACKBARS_ENQUEUE, SNACKBARS_REMOVE } from "../actions/SnackbarActions";
import { initialState } from "../states/SnackbarsState";

export const SnackbarsReducer = produce((draft, action) => {
  switch (action.type) {
    case SNACKBARS_ENQUEUE:
      draft.notifications.push({
        ...action.snackbar
      });
      return draft;
    case SNACKBARS_REMOVE:
      draft.notifications = draft.notifications.filter((snackbar) => snackbar.key !== action.key);
      return draft;
    default:
      return draft;
  }
}, initialState);
