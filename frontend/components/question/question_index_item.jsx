import React from 'react';
import { Link, hashHistory } from 'react-router';

const showPage = (id) => {
  hashHistory.push(`/questions/${id}`);
};


const QuestionIndexItem = ({question}) => {
  let userIcon = <i className="fa fa-user" aria-hidden="true"></i>;
    
  if(question.user.img_url){
    userIcon = <img
      src={`${question.user.img_url}`}>

    </img>
  }

  return(
    <li className="index-item" onClick={() => showPage(question.id)}>
      <h1>{question.title}</h1>

      <p>{userIcon} {question.user.username}</p>

      <article>{question.body}</article>
    </li>
  );
};

export default QuestionIndexItem;
