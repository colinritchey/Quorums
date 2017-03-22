import React from 'react';

const AnswerIndexItem = ({answer}) => {
  return(
    <li className="answer-index-item">
      <p><i
        className="fa fa-user"
        aria-hidden="true"></i> {answer.user.username}</p>
      {answer.body}
    </li>
  );
};

export default AnswerIndexItem;
