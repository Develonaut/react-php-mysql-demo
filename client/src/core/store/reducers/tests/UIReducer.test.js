import { UIReducer } from "core/store/reducers/UIReducer";
import { initialState } from "core/store/states/UIState";

const persist = {
  version: -1,
  rehydrated: false
};

describe("UIReducer", () => {
  test("without a matching type should return the current the state", () => {
    const state = UIReducer(undefined, {
      type: "",
      delta: {}
    });
    expect(state).toBe(initialState);
  });

  test("on UI_SET should update the UI state", () => {
    expect(
      UIReducer(
        {
          ...initialState,
          _persist: persist
        },
        {
          type: "UI_SET",
          state: {
            nav: false,
            dialog: "MOCK_CONTEXT"
          }
        }
      )
    ).toEqual({
      _persist: persist,
      ...initialState,
      dialog: "MOCK_CONTEXT"
    });
  });

  test("on UI_RESET reset the UI state to its initialState", () => {
    expect(
      UIReducer(
        {
          ...{
            ...initialState,
            nav: false,
            dialog: "UNRESET_STATE"
          },
          _persist: persist
        },
        {
          type: "UI_RESET"
        }
      )
    ).toEqual({
      _persist: persist,
      ...initialState
    });
  });
});
