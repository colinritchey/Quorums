import React from 'react';

import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

const AuthorizedButtons = ({item, currentUser, question, action}) => {

  let owner = this.props.question.user;

  let currentUserItem = null;

  let answers = [];
  if(question.answers){
    answers = Object.keys(question.answers).map((id) => question.answers[id]);
  }

  let comments = [];
  if(question.comments){
    comments = Object.keys(question.comments).map((id) => question.comments[id]);
  }

  answers.forEach((answer) => {
    if(currentUser.id === answer.user.id){
      currentUserAnswer = answer;
    }
  });

  comments.forEach((comment) => {
    if(currentUser.id === comment.user.id){
      currentUserItem = comment;
    }
  });

  if(currentUser.id === owner.id){
    return (
      <section className="button-container">
        <DeleteFormModal
          item={item}
          action={this.props.deleteQuestion}
          textButton={"Delete Question"}/>

        <FormModal buttonText={"Edit"} question={question}/>
      </section>
    );
  } else {
    return(
      <section className="button-container">

        <FormModal
          answer={currentUserAnswer}
          createAnswer={this.props.createAnswer}
          updateAnswer={this.props.updateAnswer}
          questionId={this.props.question.id}
          buttonText={"Answer"} />

        <DeleteFormModal
          item={currentUserAnswer}
          action={this.props.deleteAnswer}
          textButton={"Delete Answer"}
        />
      </section>
    );
  }
}
}
