import {
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
  RECEIVE_COMMENT,
  REMOVE_COMMENT  } from '../actions/question_actions';
import merge from 'lodash/merge';


const QuestionDetailReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  let answer = undefined;
  let comment = undefined;

  switch(action.type){
    case RECEIVE_QUESTION:
      let newQuestion = {[action.question.id]: action.question};
      return merge({}, newQuestion);

    case REMOVE_QUESTION:
      delete newState[action.question.id];
      return newState;

    case RECEIVE_ANSWER:
      answer = action.answer;

      if(newState[answer.question_id].answers === undefined ){
        newState[answer.question_id].answers = {};
      }

      newState[answer.question_id].answers[answer.id] = answer;
      return newState;
      
    case REMOVE_ANSWER:
      answer = action.answer;
      delete newState[answer.question_id].answers[answer.id];
      return newState;

    case RECEIVE_COMMENT:
      comment = action.comment;

      if(newState[comment.question_id].comments === undefined ){
        newState[comment.question_id].comments = {};
      }

      newState[comment.question_id].comments[comment.id] = comment;
      return newState;

    case REMOVE_COMMENT:
      comment = action.comment;
      delete newState[comment.question_id].comments[comment.id];
      return newState;

    default:
      return oldState;
  }
};

export default QuestionDetailReducer;
