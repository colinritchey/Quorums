import React from 'react';

const CommentIndexItem = ({comment}) => {
  return(
    <li className="index-item">
      <p><i
        className="fa fa-user"
        aria-hidden="true"></i> {comment.user.username}</p>
      <br/>
      {comment.body}
    </li>
  );
};

export default CommentIndexItem;
