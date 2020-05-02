import { reducers } from "core/store/reducers";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { middleware } from "./middleware";

export const configureStore = ({ history }) => {
  const store = createStore(reducers(history), middleware(history));
  const persistor = persistStore(store);
  return {
    persistor,
    store
  };
};
