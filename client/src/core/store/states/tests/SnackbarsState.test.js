import { initialState } from "core/store/states/SnackbarsState";

describe("SnackbarsState", () => {
  test("initialState should match expected object", () => {
    expect(initialState).toEqual({
      notifications: []
    });
  });
});
