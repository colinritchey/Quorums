import { connect } from 'react-redux';
import QuestionDetail from './question_detail';

import {
  fetchQuestion,
  updateQuestion,
  deleteQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => ({
  question: state.questionDetail[ownProps.params.questionId]
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: question => dispatch(deleteQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
