import { connect } from 'react-redux';
import {
  fetchQuestion,
  createQuestion,
  updateQuestion } from '../../actions/question_actions';

import QuestionForm from './question_form';

const mapStateToProps = (state, ownProps) => {
  let question = {title: "", body: ""};

  if(ownProps.question) {
    question = state.questions[ownProps.question.id];
  }


  let currentUser = state.session.currentUser;
  let formType = ownProps.formType || "edit";
  let tags = ownProps.tags || [];

  return { question, currentUser, formType, tags };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.formType === "new" ? createQuestion : updateQuestion;
  return{
    action: (question) => dispatch(action(question)),
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    closeModal: () => ownProps.closeModal()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
