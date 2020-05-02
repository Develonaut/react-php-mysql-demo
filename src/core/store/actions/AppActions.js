import * as serviceWorker from "../../../serviceWorker";

export const APP_START = "APP_START";
export const APP_SET = "APP_SET";

export function setApp(state) {
  return {
    type: APP_SET,
    state
  };
}

export function startApp() {
  return async (dispatch) => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
    dispatch(
      setApp({
        ready: true
      })
    );
  };
}
