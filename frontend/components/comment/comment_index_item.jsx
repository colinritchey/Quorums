import React from 'react';



const CommentIndexItem = ({comment, currentUser, authorizedButttons}) => {
  let userIcon = <i className="fa fa-user" aria-hidden="true"></i>;

  if(comment.user.img_url){
    userIcon = <img
      src={`${comment.user.img_url}`}>

    </img>
  }

  return(
    <li className="comment-index-item">

      <div>{userIcon} {comment.user.username}
        <span
          className="comment-inline-buttons">
          {authorizedButttons(comment, currentUser)}</span>
      </div>

      <p>{comment.body}</p>
    </li>
  );
};

export default CommentIndexItem;
