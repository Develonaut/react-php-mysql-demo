import { enqueueSnackbar } from "core/store/actions/SnackbarActions";
import { SnackbarsReducer } from "core/store/reducers/SnackbarsReducer";
import { initialState } from "core/store/states/SnackbarsState";

describe("SnackbarsReducer", () => {
  test("without a matching type should return the current Snackbars state", () => {
    const state = SnackbarsReducer(undefined, {
      type: "",
      delta: {}
    });
    expect(state).toBe(initialState);
  });

  test("on SNACKBARS_ENQUEUE should add the snackbar to the notifications array in Snackbars state", () => {
    const snackbar = enqueueSnackbar({
      message: "test",
      options: {
        variant: "error"
      }
    });
    expect(
      SnackbarsReducer(
        {
          ...initialState
        },
        {
          type: "SNACKBARS_ENQUEUE",
          snackbar
        }
      )
    ).toEqual({
      ...initialState,
      notifications: [snackbar]
    });
  });

  test("on SNACKBARS_REMOVE removes the notification from the Snackbar state", () => {
    expect(
      SnackbarsReducer(
        {
          ...initialState,
          notifications: [
            ...initialState.notifications,
            {
              key: "testKey",
              message: "test",
              options: {
                variant: "error"
              }
            }
          ]
        },
        {
          key: "testKey",
          type: "SNACKBARS_REMOVE"
        }
      )
    ).toEqual({
      ...initialState
    });
  });
});
