import { connect } from 'react-redux';
import {
  fetchQuestion,
  createQuestion,
  updateQuestion } from '../../actions/question_actions';

import QuestionForm from './question_form';

const mapStateToProps = (state, ownProps) => {
  let question = {title: "", body: ""};
  if(ownProps.params) {
    question = state.questions[ownProps.params.questionId];
  }
  let currentUser = state.session.currentUser;
  let formType = ownProps.formType || "edit";
  return { question, currentUser, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.formType === "new" ? createQuestion : updateQuestion;
  return{
    action: (question) => dispatch(action(question)),
    fetchQuestion: (id) => dispatch(fetchQuestion(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
