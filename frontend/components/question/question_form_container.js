import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';

import QuestionForm from './question_form';

const mapStateToProps = (state) => {
  let question = {title: "", body: ""};
  let currentUser = state.session.currentUser;
  // debugger;
  return { question, currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  createQuestion: (question) => dispatch(createQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
