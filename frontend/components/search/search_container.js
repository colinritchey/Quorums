import { connect } from 'react-redux';

import {  updateFilter } from '../../actions/filter_actions';

import Search from './search';

const mapStateToProps = (state, ownProps) => {
  return {
    questions: Object.keys(state.questions).map((id) => state.questions[id]),
    searchWord: ownProps.params.searchWord
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
