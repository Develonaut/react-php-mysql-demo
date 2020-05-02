import { connectRouter } from "connected-react-router";
import { AppReducer } from "core/store/reducers/AppReducer";
import { SnackbarsReducer } from "core/store/reducers/SnackbarsReducer";
import { UIReducer } from "core/store/reducers/UIReducer";
import { combineReducers } from "redux";
import { UserReducer } from "./reducers/UserReducer";

export const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    app: AppReducer,
    ui: UIReducer,
    snackbars: SnackbarsReducer,
    user: UserReducer
  });
