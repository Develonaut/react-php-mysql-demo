export const UI_SET = "UI_SET";

export function setUI(payload) {
  return {
    type: UI_SET,
    payload
  };
}

export function openNavDrawer() {
  return (dispatch) => {
    dispatch(
      setUI({
        navDrawerOpen: true,
        contentDrawerType: null
      })
    );
  };
}

export function closeNavDrawer() {
  return setUI({
    navDrawerOpen: false
  });
}

export function openContentDrawer(payload) {
  return (dispatch) => {
    dispatch(
      setUI({
        navDrawerOpen: false,
        contentDrawerType: payload.contentDrawerType
      })
    );
  };
}

export function closeContentDrawer() {
  return setUI({
    contentDrawerType: null
  });
}
