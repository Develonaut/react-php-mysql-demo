import { initialState } from "../states/UserState";

export const USER_SET = "USER_SET";
export const USER_SET_PERMISSIONS = "USER_SET_PERMISSIONS";
export const USER_SET_COMPANY_META_DATA = "USER_SET_COMPANY_META_DATA";
export const USER_SET_LICENSES = "USER_SET_LICENSES";

export function setUser(payload) {
  return {
    type: USER_SET,
    payload
  };
}

export function login(payload) {
  return async (dispatch) => {
    dispatch(
      setUser({
        isAuthenticated: true,
        ...payload
      })
    );
  };
}

export function logout() {
  return setUser(initialState);
}
