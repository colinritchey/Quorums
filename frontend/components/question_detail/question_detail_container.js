import { connect } from 'react-redux';
import QuestionDetail from './question_detail';

import {
  fetchQuestion,
  updateQuestion,
  deleteQuestion,
  createAnswer } from '../../actions/question_actions';

// import {
//   createAnswer,
//   updateAnswer,
//   deleteAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let question = state.questionDetail[ownProps.params.questionId];

  return( { question, currentUser });
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: question => dispatch(deleteQuestion(question)),
  createAnswer: answer => dispatch(createAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
