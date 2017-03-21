import React from 'react';

import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
    let comments = this.props.comments;
    this.state = {comments: this.props.comments};
    this.displayComments = this.displayComments.bind(this);
    this.showNest = this.showNest.bind(this);
  }

  showNest(){
    this.setState({comments: this.props.comments});
  }

  displayComments(list){
    let commentTree = this.props.comments;
    return(
      <ul>
        {list.map((comment) => (
          <CommentIndexItem
            key={comment.id}
            comment={comment}
            commentList={this.state.comments}
            questionId={comment.question_id}
            displayComments={this.displayComments}
            createComment={this.props.createComment}
          />
        ))}
      </ul>);

  }

  render(){
    let commentDisplayTree = this.displayComments(this.state.comments[""]);

    return(
      <section className="detail">
        <h3>Comments</h3>

        <ul className="comment-list">
          {commentDisplayTree}
        </ul>
      </section>
    );
  }
}

export default CommentIndex;
