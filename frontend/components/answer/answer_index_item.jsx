import React from 'react';

const AnswerIndexItem = ({answer}) => {
  return(
    <li className="question-index-item">
      {answer.body}
    </li>
  );
};

export default AnswerIndexItem;
