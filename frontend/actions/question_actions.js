import * as APIUtil from '../util/question_api_util';
import * as APIUtilAnswer from '../util/answer_api_util';
import * as APIUtilComment from '../util/comment_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

import { hashHistory } from 'react-router';

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveAnswer = (answer) => ({
  type: RECEIVE_ANSWER,
  answer
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
});

export const removeQuestion = (question) => ({
  type: REMOVE_QUESTION,
  question
});

export const removeAnswer = (answer) => ({
  type: REMOVE_ANSWER,
  answer
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchQuestions = (data) => dispatch => (
  APIUtil.fetchQuestions(data)
    .then(questions => dispatch(receiveQuestions(questions)))
);

export const fetchQuestion = (id) => dispatch => (
  APIUtil.fetchQuestion(id)
    .then(_question => dispatch(receiveQuestion(_question)))
);

export const createQuestion = (question) => dispatch => (
  APIUtil.createQuestion(question)
    .then(_question => dispatch(receiveQuestion(_question)))
);

export const createAnswer = (answer) => dispatch => {
  return(
    APIUtilAnswer.createAnswer(answer)
      .then(_answer => {
        dispatch(receiveAnswer(_answer));
      })
    );
};

export const createComment = (comment) => dispatch => (
  APIUtilComment.createComment(comment)
    .then(_comment => {
      dispatch(receiveComment(_comment));
    })
);

export const updateQuestion = (question) => dispatch => (
  APIUtil.updateQuestion(question)
    .then(_question => {
      dispatch(receiveQuestion(_question));
    })
);

export const updateAnswer = (answer) => dispatch => (
  APIUtilAnswer.updateAnswer(answer)
    .then(_answer => {
      dispatch(receiveAnswer(_answer));
    })
);

export const updateComment = (comment) => dispatch => (
  APIUtilComment.updateComment(comment)
    .then(_comment => {
      dispatch(receiveComment(_comment));
    })
);

export const deleteQuestion = (question) => dispatch => (
  APIUtil.deleteQuestion(question.id)
    .then(_question => {
      dispatch(removeQuestion(_question));
      hashHistory.push('/');
    })
);

export const deleteAnswer = (answer) => dispatch => {
  return (
    APIUtilAnswer.deleteAnswer(answer.id)
      .then(_answer => {
        dispatch(removeAnswer(_answer));
      })
    );
};

export const deleteComment = (comment) => dispatch => {
  return (
    APIUtilComment.deleteComment(comment.id)
      .then(_comment => {
        dispatch(removeComment(_comment));
      })
    );

};
