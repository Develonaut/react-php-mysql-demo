import { UI_SET } from "core/store/actions/UIActions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { produce } from "immer";
import { initialState } from "../states/UIState";

const reducer = produce((draft, action) => {
  switch (action.type) {
    case UI_SET:
      return {
        ...draft,
        ...action.payload
      };
    default:
      return draft;
  }
}, initialState);

export const UIReducer = persistReducer(
  {
    key: "ui",
    storage
  },
  reducer
);
