import { App } from "core/App";
import { configureStore } from "core/store/configureStore";
import { createBrowserHistory } from "history";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "index.css";

const history = createBrowserHistory();
const { persistor: persister, store } = configureStore({
  history
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persister}>
      <App history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
