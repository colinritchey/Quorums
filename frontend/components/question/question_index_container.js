import { connect } from 'react-redux';

import { fetchQuestions, clearQuestions } from '../../actions/question_actions';

import QuestionIndex from './question_index';

const mapStateToProps = (state, ownProps) => ({
  questions: Object.keys(state.questions).map((id) => state.questions[id]),
  formType: ownProps.formType,
  searchTitle: ownProps.searchTitle
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  clearQuestions: () => dispatch(clearQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
