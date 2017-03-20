import { connect } from 'react-redux';
import QuestionDetail from './question_detail';

import {
  fetchQuestion,
  updateQuestion,
  deleteQuestion,
  createAnswer,
  updateAnswer,
  deleteAnswer,
  createComment,
  updateComment,
  deleteComment, } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let question = state.questionDetail[ownProps.params.questionId];

  return( { question, currentUser });
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  updateQuestion: question => dispatch(updateQuestion(question)),
  deleteQuestion: question => dispatch(deleteQuestion(question)),
  createAnswer: answer => dispatch(createAnswer(answer)),
  updateAnswer: answer => dispatch(updateAnswer(answer)),
  deleteAnswer: answer => dispatch(deleteAnswer(answer)),
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
