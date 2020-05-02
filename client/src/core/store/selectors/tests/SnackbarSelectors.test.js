import { getSnackbars } from "core/store/selectors/SnackbarSelectors";

import { configureStore } from "core/store/configureStore";
import { createBrowserHistory } from "history";
import { mockStoreState } from "tests/utils";

const history = createBrowserHistory();
const { store } = configureStore({
  history
});
const state = store.getState();

describe("SnackbarSelectors", () => {
  test("getSnackbars should return the notifications object from the Snackbars State", () => {
    const mockNotification = {
      key: "testKey",
      message: "test",
      options: {
        variant: "error"
      }
    };
    const mockedState = mockStoreState(state, "snackbars", {
      notifications: [mockNotification]
    });
    expect(getSnackbars(mockedState)).toEqual([mockNotification]);
  });
});
