export const SNACKBARS_ENQUEUE = "SNACKBARS_ENQUEUE";
export const SNACKBARS_REMOVE = "SNACKBARS_REMOVE";

export function enqueueSnackbar(snackbar) {
  return {
    type: SNACKBARS_ENQUEUE,
    snackbar: {
      key: new Date().getTime() + Math.random(),
      ...snackbar
    }
  };
}

export function removeSnackbar(key) {
  return {
    type: SNACKBARS_REMOVE,
    key
  };
}
