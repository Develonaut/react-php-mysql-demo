import produce from "immer";
import storage from "redux-persist/lib/storage/session";
import { USER_SET } from "core/store/actions/UserActions";
import { persistReducer } from "redux-persist";
import { initialState } from "../states/UserState";

/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
export const reducer = produce((draft, action) => {
  switch (action.type) {
    case USER_SET:
      draft = {
        ...draft,
        ...action.payload
      };
      return draft;
    default:
      return draft;
  }
}, initialState);

export const UserReducer = persistReducer(
  {
    key: "user",
    storage
  },
  reducer
);
