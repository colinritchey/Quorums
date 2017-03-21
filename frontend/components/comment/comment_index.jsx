import React from 'react';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);

    this.authorizedButttons = this.authorizedButttons.bind(this);
  }

  authorizedButttons(comment, currentUser){
    let currentUserComment = null;
    let buttonType = "create";
    let deleteForm = "";
      if(currentUser.id === comment.user.id){
        buttonType = "edit";
        deleteForm = (
          <DeleteFormModal
            item={comment}
            action={this.props.deleteComment}
            textButton={"Delete Comment"}
          />
        );

        return(
          <section className="comment-buttons">

            <FormModal
              comment={comment}
              createComment={this.props.createComment}
              updateComment={this.props.updateComment}
              questionId={this.props.question.id}
              buttonType={buttonType} />
            {deleteForm}
          </section>
        );
      } else {
        return(<div></div>);
      }
  }
  render(){
    return(
      <section className="detail comments-container">
        <section className="button-container">

          <FormModal
            createComment={this.props.createComment}
            updateComment={this.props.updateComment}
            questionId={this.props.question.id}
            buttonType={"create"} />
        </section>
        <h4>{this.props.comments.length} Comments</h4>
        <ul className="comment-index">
          {this.props.comments.map((comment, idx) => (
            <CommentIndexItem
              comment={comment}
              currentUser={this.props.currentUser}
              authorizedButttons={this.authorizedButttons}
              key={idx}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default CommentIndex;
