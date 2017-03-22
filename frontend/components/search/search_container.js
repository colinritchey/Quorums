import { connect } from 'react-redux';

import {  updateFilter } from '../../actions/filter_actions';

import Search from './search';

const mapStateToProps = (state) => {
  // debugger;
  return {
    questions: Object.keys(state.questions).map((id) => state.questions[id]),
    searchWords: state.filters.searchWords
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
