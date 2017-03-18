import {
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  RECEIVE_ANSWER } from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionDetailReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_QUESTION:
      let newQuestion = {[action.question.id]: action.question};
      return merge({}, newQuestion);
    case REMOVE_QUESTION:
      delete newState[action.question.id];
      return newState;
    case RECEIVE_ANSWER:
      // debugger;
      let answer = action.answer;

      newState[answer.question_id].answers[answer.id] = answer;
      // newState[answer.question_id].answers.push(answer);
      return newState;
    default:
      return oldState;
  }
};

export default QuestionDetailReducer;
