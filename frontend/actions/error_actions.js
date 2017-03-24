export const RECEIVE_MAIN_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_MAIN_ERRORS = "REMOVE_ERRORS";

export const receiveMainErrors = errors => ({
  type: RECEIVE_MAIN_ERRORS,
  errors
});

export const removeMainErrors = () => ({
  type: REMOVE_MAIN_ERRORS,
  errors: []
});
