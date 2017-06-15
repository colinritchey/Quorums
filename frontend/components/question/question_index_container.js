import { connect } from 'react-redux';

import { fetchQuestions, clearQuestions } from '../../actions/question_actions';
import { updateFilter } from '../../actions/filter_actions';

import QuestionIndex from './question_index.jsx';

const mapStateToProps = (state, ownProps) => ({
  questions: Object.keys(state.questions).map((id) => state.questions[id]),
  formType: ownProps.formType,
  searchTitle: ownProps.searchTitle
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  clearQuestions: () => dispatch(clearQuestions()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
