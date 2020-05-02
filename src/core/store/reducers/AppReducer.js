import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import produce from "immer";
import { APP_SET } from "../actions/AppActions";
import { initialState } from "../states/AppState";

const reducer = produce((draft, action) => {
  switch (action.type) {
    case APP_SET:
      return {
        ...draft,
        ...action.state
      };
    default:
      return draft;
  }
}, initialState);

export const AppReducer = persistReducer(
  {
    key: "app",
    storage,
    whitelist: []
  },
  reducer
);
