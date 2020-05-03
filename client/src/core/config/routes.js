import { PATHS } from "core/config/urls";
import { Profile, Login, Signup } from "pages";

export const routes = [
  {
    key: "profile",
    path: PATHS.PROFILE,
    isProtected: true,
    page: {
      Component: Profile,
      props: {}
    }
  },
  {
    key: "login",
    path: PATHS.LOGIN,
    page: {
      Component: Login,
      props: {}
    }
  },
  {
    key: "signup",
    path: PATHS.SIGN_UP,
    page: {
      Component: Signup,
      props: {}
    }
  }
];
