import { initialState } from "../states/UserState";
import Axios from "axios";

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

export function attemptLogin(payload) {
  console.log(payload);
  return async (dispatch) => {
    try {
      const { data } = await Axios.post("http://localhost:8000/login", payload);
      dispatch(authenticateUser(data.token, payload));
    } catch (error) {
      throw error;
    }
  };
}

export function attemptSignup(payload) {
  return async (dispatch) => {
    try {
      const { data } = await Axios.post("http://localhost:8000/signup", payload);
      dispatch(authenticateUser(data.token, payload));
    } catch (error) {
      throw error;
    }
  };
}

export function authenticateUser(token, data) {
  return setUser({
    isAuthenticated: true,
    token,
    ...data
  });
}

export function logout() {
  return setUser(initialState);
}
