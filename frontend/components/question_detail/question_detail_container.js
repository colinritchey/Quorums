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
  deleteComment,
  clearQuestions } from '../../actions/question_actions';

import { fetchTags } from '../../actions/tag_actions.js';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let question = state.questionDetail[ownProps.params.questionId];
  let tags = state.tags;

  return( { question, currentUser, tags });
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
  clearQuestions: () => dispatch(clearQuestions()),
  fetchTags: () => dispatch(fetchTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
