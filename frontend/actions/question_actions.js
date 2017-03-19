import * as APIUtil from '../util/question_api_util';
import * as APIUtilAnswer from '../util/answer_api_util';
import * as APIUtilComment from '../util/comment_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

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

export const fetchQuestions = () => dispatch => (
  APIUtil.fetchQuestions()
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

export const createAnswer = (answer) => dispatch => (
  APIUtilAnswer.createAnswer(answer)
    .then(_answer => {
      dispatch(receiveAnswer(_answer));
    })
);

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

export const deleteQuestion = (question) => dispatch => (
  APIUtil.deleteQuestion(question)
    .then(_question => {
      dispatch(removeQuestion(_question));
      hashHistory.push('/');
    })
);
