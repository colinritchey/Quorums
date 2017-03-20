import {
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
  RECEIVE_COMMENT } from '../actions/question_actions';
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
      let answer = action.answer;

      if(newState[answer.question_id].answers === undefined ){
        newState[answer.question_id].answers = {};
      }

      newState[answer.question_id].answers[answer.id] = answer;
      return newState;

    case RECEIVE_COMMENT:
      let comment = action.comment;

      if(newState[comment.question_id].comments === undefined ){
        newState[comment.question_id].comments = {};
      }

      newState[comment.question_id].comments[comment.id] = comment;
      return newState;

    default:
      return oldState;
  }
};

export default QuestionDetailReducer;
