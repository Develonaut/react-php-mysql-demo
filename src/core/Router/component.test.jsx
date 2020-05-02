import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { setupShallowTest } from "tests/utils";
import { Router } from "./component";

const getDefaultProps = () => ({
  history: createBrowserHistory()
});

const setupShallow = setupShallowTest(Router, getDefaultProps);

describe("Router", () => {
  test("should render with ThemeProvider, BrowserRouter, ConnectedRouter, Switch, and Routes", () => {
    const { wrapper } = setupShallow();
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
    expect(wrapper.find(ConnectedRouter)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(1);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
