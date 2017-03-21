import React from 'react';

const AnswerIndexItem = ({answer}) => {
  return(
    <li className="index-item">
      <p><i
        className="fa fa-user"
        aria-hidden="true"></i> {answer.user.username}</p>
      <br/>
      {answer.body}
    </li>
  );
};

export default AnswerIndexItem;
