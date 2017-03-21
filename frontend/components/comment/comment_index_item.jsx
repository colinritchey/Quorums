import React from 'react';

const CommentIndexItem = ({comment, currentUser, authorizedButttons}) => {
  return(
    <li className="index-item">


      <p><i
        className="fa fa-user"
        aria-hidden="true"></i> {comment.user.username}
        <span className="comment-inline-buttons">{authorizedButttons(comment, currentUser)}</span>  
      </p>


      <p>{comment.body}</p>
    </li>
  );
};

export default CommentIndexItem;
