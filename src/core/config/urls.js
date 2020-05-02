import { compile } from "path-to-regexp";
import queryString from "query-string";
import urljoin from "url-join";

export const PATHS = {
  PROFILE: "/profile",
  HOME: "/",
  LOGIN: "/login",
  SIGN_UP: "/signup"
};

export function buildUrl({ path, pathArgs = {}, queryParams = {}, encode = false }) {
  const compiledpath = compile(path)(pathArgs);
  const serializedParams = queryString.stringify(queryParams, {
    encode
  });
  const delimeter = path.includes("?") ? "&" : "?";
  return serializedParams
    ? urljoin(`${compiledpath}${delimeter}${serializedParams}`)
    : urljoin(compiledpath);
}
