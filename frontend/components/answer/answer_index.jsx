import React from 'react';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component{
  constructor(props){
    super(props);

    this.authorizedButttons = this.authorizedButttons.bind(this);
  }

  authorizedButttons(){

    let currentUserAnswer = undefined;
    let buttonType = "create";
    let deleteForm = "";
    let owner = this.props.question.user;
    let question = this.props.question;

    let answers = [];
    if(question.answers){
      answers = Object.keys(question.answers).map((id) => question.answers[id]);
    }

    answers.forEach((answer) => {
      if(this.props.currentUser.id === answer.user.id){
        currentUserAnswer = answer;
        buttonType = "edit";
        deleteForm = (
          <DeleteFormModal
            item={currentUserAnswer}
            action={this.props.deleteAnswer}
            textButton={"Delete Answer"}
            />
        );
      }
    });

    return(
      <section className="button-container">

        <FormModal
          formType="answer"
          answer={currentUserAnswer}
          createAnswer={this.props.createAnswer}
          updateAnswer={this.props.updateAnswer}
          questionId={this.props.question.id}
          buttonType={buttonType} />
        {deleteForm}
      </section>
    );
  }

  render(){
    return(
      <section className="detail answers-container">
        {this.authorizedButttons()}
        <h4>{this.props.answers.length} Answers</h4>
        <ul>
          {this.props.answers.map((answer, idx) => (
            <AnswerIndexItem answer={answer} key={idx}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default AnswerIndex;
