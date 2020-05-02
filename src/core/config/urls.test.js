import { getUrl, Urls } from "common/config/urls";

describe("urls", () => {
  test("should export a const called Urls that matches snapshot", () => {
    expect(Urls).toMatchSnapshot();
  });

  test("getUrl() should return a constructed url friendly string", () => {
    const urls = [
      {
        test: {
          url: "test/:testParam",
          pathArgs: {
            testParam: "mockParam"
          },
          queryParams: {
            queryParamKey: "queryParamValue"
          }
        },
        expected: "test/mockParam?queryParamKey=queryParamValue"
      },
      {
        test: {
          url: "test/:testParam",
          pathArgs: {
            testParam: "test with chars"
          },
          queryParams: {
            queryParamKey: "query+param+key"
          },
          encode: true
        },
        expected: "test/test%20with%20chars?queryParamKey=query%2Bparam%2Bkey"
      }
    ];

    urls.forEach(({ test: { url, pathArgs, queryParams, encode }, expected }) => {
      expect(
        getUrl({
          url,
          pathArgs,
          queryParams,
          encode
        })
      ).toBe(expected);
    });
  });
});
