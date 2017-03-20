import React from 'react';

const CommentIndexItem = ({comment, commentList, displayComments}) => {
  if(commentList[comment.id]){
    return(
      <li key={comment.id} className="index-item">
        {comment.body}
        <ul className="comment-list">
          {displayComments(commentList[comment.id])}
        </ul>
      </li>
    );
  } else {
    return(
      <li key={comment.id} className="index-item" >{comment.body}</li>
    );
  }


};

export default CommentIndexItem;
