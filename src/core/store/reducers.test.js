import { reducers } from "core/store/reducers";
import { createMemoryHistory } from "history";

describe("reducers", () => {
  test("when called should match snapshot", () => {
    const history = createMemoryHistory();
    expect(reducers(history)).toMatchSnapshot();
  });
});
