import React from 'react';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component{
  constructor(props){
    super(props);

    this.authorizedButttons = this.authorizedButttons.bind(this);
  }

  authorizedButttons(answer, currentUser){
    let currentUserAnswer = null;
    let buttonType = "create";
    let deleteForm = "";
      if(currentUser.id === answer.user.id){
        buttonType = "edit";
        deleteForm = (
          <DeleteFormModal
            item={answer}
            action={this.props.deleteAnswer}
            textButton={"Answer"}
            />
        );
        return(
          <section className="comment-buttons">

            <FormModal
              formType="answer"
              answer={answer}
              createAnswer={this.props.createAnswer}
              updateAnswer={this.props.updateAnswer}
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
    let header = "Answers";

    if(this.props.answers.length === 1){
      header = "Answer";
    }

    return(
      <section>
        <section className="detail answers-container">
          <section className="button-container">

            <FormModal
              formType="answer"
              createAnswer={this.props.createAnswer}
              updateAnswer={this.props.updateAnswer}
              questionId={this.props.question.id}
              buttonType={"create"} />

          </section>

          <h4>{this.props.answers.length} {header}</h4>
          <ul className="comment-index">
            {this.props.answers.map((answer, idx) => (
              <AnswerIndexItem
                answer={answer}
                key={idx}
                currentUser={this.props.currentUser}
                authorizedButttons={this.authorizedButttons}/>
            ))}
          </ul>
        </section>
      </section>
    );
  }
}

export default AnswerIndex;
