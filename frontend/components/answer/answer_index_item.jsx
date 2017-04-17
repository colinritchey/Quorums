import React from 'react';

const AnswerIndexItem = ({answer, authorizedButttons}) => {
  let userIcon = <i className="fa fa-user" aria-hidden="true"></i>;

  if(answer.user.img_url){
    userIcon = <img
      src={`${answer.user.img_url}`}>

    </img>
  }

  return(
    <li className="comment-index-item">
      <div>{userIcon} {answer.user.username} <span
        className="comment-inline-buttons">
        {authorizedButttons(answer, currentUser)}</span></div>
      <p>{answer.body}</p>
    </li>
  );
};

export default AnswerIndexItem;
