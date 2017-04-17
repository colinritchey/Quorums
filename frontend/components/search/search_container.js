import { connect } from 'react-redux';

import {  updateFilter } from '../../actions/filter_actions';
import { clearQuestions } from '../../actions/question_actions';

import Search from './search';

const mapStateToProps = (state, ownProps) => {
  let searchByTitle = ownProps.params.searchByTitle.split("-").join(" ");
  return {
    questions: Object.keys(state.questions).map((id) => state.questions[id]),
    formType: ownProps.formType,
    searchByTitle
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  clearQuestions: () => dispatch(clearQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
