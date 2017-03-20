import React from 'react';
import { Link } from 'react-router';

const QuestionIndexItem = ({question}) =>{
  return(
    <li className="index-item">
      <h1><Link to={`/questions/${question.id}`}>{question.title}</Link></h1>

      <p><i
        className="fa fa-user"
        aria-hidden="true"></i> {question.user.username}</p>

      <article>{question.body}</article>
    </li>
  );
};

export default QuestionIndexItem;
