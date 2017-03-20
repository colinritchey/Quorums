import React from 'react';

import CommentForm from './comment_form';

const CommentIndexItem = ({comment, commentList, questionId,
                          displayComments, createComment}) => {
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
      <li key={comment.id} className="index-item" >
        {comment.body}
        <CommentForm
          createComment={createComment}
          questionId={questionId}
          parentCommentId={comment.parent_comment_id}/>
      </li>
    );
  }
  // <CommentForm createComment={this.createComment} questionId={questionId}/>


};

export default CommentIndexItem;
