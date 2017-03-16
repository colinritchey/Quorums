import React from 'react';

const QuestionIndexItem = ({title, body, user}) =>{
  return(
    <li className="question-index-item">
      <h1>{title}</h1>
      <p><i className="fa fa-user" aria-hidden="true"></i> {user.username}</p>
      <article>{body}</article>
    </li>
  );
};

export default QuestionIndexItem;
