import React from 'react';

const CommentIndexItem = ({comment}) => {
  return(
    <li className="index-item">
      {comment.body}
    </li>
  );
};

export default CommentIndexItem;
