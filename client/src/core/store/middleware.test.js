import { createMemoryHistory } from "history";
import { middleware } from "./middleware";

describe("middleware", () => {
  test("when called should match snapshot", () => {
    const history = createMemoryHistory();
    expect(middleware(history)).toMatchSnapshot();
  });
});
