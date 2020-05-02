import { AppBar } from "features/appBar";
import { Nav } from "features/nav";
import { Collection } from "pages/Collection";
import React from "react";
import { setupShallowTest } from "tests/utils";
import { DefaultPageContainer } from "./component";

// Need to mock DefaultPageContainer since it's will load in container components
// will will cause and issue with nested connected components in the test.
jest.mock("pages/containers/DefaultPageContainer");

const getDefaultProps = () => ({
  className: undefined,
  children: <Collection />
});
const setupShallow = setupShallowTest(DefaultPageContainer, getDefaultProps);

describe("Collections", () => {
  test("should render with passed in children components", () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(
      wrapper.find({
        "data-test-selector": "main"
      })
    ).toHaveLength(1);
    expect(
      wrapper.find({
        "data-test-selector": "content"
      })
    ).toHaveLength(1);
    expect(wrapper.find(Collection)).toHaveLength(1);
  });

  test("should add the passed in className to the page container", () => {
    const { wrapper } = setupShallow({
      className: "test-class"
    });
    expect(wrapper.props().className).toContain("test-class");
  });
});
