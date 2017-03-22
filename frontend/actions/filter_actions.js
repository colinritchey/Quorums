import { fetchQuestions } from './question_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => (dispatch, getState) => {
  // debugger;
  dispatch(changeFilter(filter, value));
  return dispatch(fetchQuestions(getState().filters));
};

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
