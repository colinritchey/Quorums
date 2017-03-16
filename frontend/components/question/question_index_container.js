import { connect } from 'react-redux';

import { fetchQuestions } from '../../actions/question_actions';

import QuestionIndex from './quesiton_index';

const mapStateToProps = (state) => ({
  questions: Object.keys(state.questions).map((id) => state.questions[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
