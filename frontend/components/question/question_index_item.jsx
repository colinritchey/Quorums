import React from 'react';
import { Link, hashHistory } from 'react-router';

const showPage = (id) => {
  hashHistory.push(`/questions/${id}`);
};


const QuestionIndexItem = ({question}) => {
  return(
    <li className="index-item" onClick={() => showPage(question.id)}>
      <h1>{question.title}</h1>

      <p><i
        className="fa fa-user"
        aria-hidden="true"></i> {question.user.username}</p>

      <article>{question.body}</article>
    </li>
  );
};

export default QuestionIndexItem;
