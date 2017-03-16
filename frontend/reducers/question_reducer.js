import { RECEIVE_QUESTIONS,
  RECEIVE_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      let newQuestion = {[action.question.id]: action.question};
      return merge({}, oldState, newQuestion);
    default:
      return oldState;
  }
};

export default QuestionReducer;
