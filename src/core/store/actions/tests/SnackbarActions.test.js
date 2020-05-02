import { enqueueSnackbar, removeSnackbar } from "core/store/actions/SnackbarActions";

describe("SnackbarActions", () => {
  test("enqueueSnackbar should return the SNACKBARS_ENQUEU action", () => {
    expect(
      enqueueSnackbar({
        message: "test",
        options: {
          variant: "info"
        }
      })
    ).toEqual({
      snackbar: {
        key: expect.any(Number),
        message: "test",
        options: {
          variant: "info"
        }
      },
      type: "SNACKBARS_ENQUEUE"
    });
  });

  test("removeSnackbar should return the SNACKBARS_REMOVE action", () => {
    expect(removeSnackbar("test")).toEqual({
      key: "test",
      type: "SNACKBARS_REMOVE"
    });
  });
});
