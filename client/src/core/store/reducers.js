import { connectRouter } from "connected-react-router";
import { AppReducer } from "core/store/reducers/AppReducer";
import { combineReducers } from "redux";
import { UserReducer } from "./reducers/UserReducer";

export const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    app: AppReducer,
    user: UserReducer
  });
