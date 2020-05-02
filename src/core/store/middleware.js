import { routerMiddleware } from "connected-react-router";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const middleware = (history) =>
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)));
