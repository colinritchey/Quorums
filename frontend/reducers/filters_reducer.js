import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  searchByTitle: undefined,
  searchByTagId: undefined
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    let merger = merge({}, _defaultFilters, newFilter);
    return merger;
  } else {
    return state;
  }
};

export default FiltersReducer;
