import { createMemoryHistory } from "history";
import { configureStore } from "./configureStore";

describe("configureStore", () => {
  test("when called should match snapshot", () => {
    const history = createMemoryHistory();
    expect(
      configureStore({
        history
      })
    ).toMatchSnapshot();
  });
});
