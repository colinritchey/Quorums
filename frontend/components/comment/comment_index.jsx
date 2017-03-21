import React from 'react';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);

    this.authorizedButttons = this.authorizedButttons.bind(this);
  }

  authorizedButttons(){

    let currentUserComment = null;
    let buttonType = "create";
    let deleteForm = "";
    let owner = this.props.question.user;
    let question = this.props.question;

    let comments = [];
    if(question.comments){
      comments = Object.keys(question.comments).map((id) => question.comments[id]);
    }

    comments.forEach((comment) => {
      if(this.props.currentUser.id === comment.user.id){
        currentUserComment = comment;
        buttonType = "edit";
        deleteForm = (
          <DeleteFormModal
            item={currentUserComment}
            action={this.props.deleteComment}
            textButton={"Delete Comment"}
          />
        );
      }
    });

    return(
      <section className="button-container">

        <FormModal
          comment={currentUserComment}
          createComment={this.props.createComment}
          updateComment={this.props.updateComment}
          questionId={this.props.question.id}
          buttonType={buttonType} />
        {deleteForm}
      </section>
    );
  }
  render(){
    return(
      <section className="detail">
        {this.authorizedButttons()}
        <h4>{this.props.comments.length} Comments</h4>
        <ul>
          {this.props.comments.map((comment, idx) => (
            <CommentIndexItem comment={comment} key={idx}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default CommentIndex;
