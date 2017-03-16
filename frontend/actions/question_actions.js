import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

import { hashHistory } from 'react-router';

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
});

export const fetchQuestions = () => dispatch => (
  APIUtil.fetchQuestions()
    .then(questions => dispatch(receiveQuestions(questions)))
);

export const fetchQuestion = (question) => dispatch => (
  APIUtil.fetchQuestion(question)
    .then(_question => dispatch(receiveQuestion(_question)))
);

export const createQuestion = (question) => dispatch => (
  APIUtil.createQuestion(question)
    .then(_question => dispatch(receiveQuestion(_question)))
);
