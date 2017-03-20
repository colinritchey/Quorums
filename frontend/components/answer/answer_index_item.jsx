import React from 'react';

const AnswerIndexItem = ({answer}) => {
  return(
    <li className="index-item">
      {answer.body}
    </li>
  );
};

export default AnswerIndexItem;
