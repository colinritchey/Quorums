import React from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionFormContainer from '../question_form/question_form_container';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

import AnswerIndex from '../answer/answer_index';
import AnswerForm from '../answer/answer_form';

import CommentIndex from '../comment/comment_index';
import TagIndex from '../tag/tag_index';

class QuestionDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      answer: {body: ""},
      comment: {body: ""},
      commentShow: false
    };

    this.authorFunctions = this.authorFunctions.bind(this);

  }

  componentDidMount(){
    this.props.fetchQuestion(parseInt(this.props.params.questionId));
    this.props.fetchTags();
  }

  authorFunctions(){
    let currentUser = this.props.currentUser;
    let owner = this.props.question.user;
    let question = this.props.question;

    let currentUserAnswer = null;

    let answers = [];
    if(question.answers){
      answers = Object.keys(question.answers).map((id) => question.answers[id]);
    }

    answers.forEach((answer) => {
      if(currentUser.id === answer.user.id){
        currentUserAnswer = answer;
      }
    });

    if(currentUser.id === owner.id){
      return (
        <section className="button-container">
          <FormModal buttonType={"edit"} question={question} tags={this.props.tags}/>
          <DeleteFormModal
            item={question}
            action={this.props.deleteQuestion}
            textButton={"Question"}/>

        </section>
      );
    } else {
      return(
        <section className="button-container">

        </section>
      );
    }
  }

  update(formType, field){
    return e => {
      this.setState({[formType]: {[field]: e.target.value}});
    };
  }

  render(){
    const question = this.props.question;
    if (!question){
      return <div>Loading...</div>;
    }

    let body = <article>{question.body}</article>;

    if(!question.body){
      body = "";
    }

    let answers = [];
    if(question.answers){
      answers = Object.keys(question.answers).map((id) => question.answers[id]);
    }

    let comments = [];
    if(question.comments){
      comments = Object.keys(question.comments).map((id) => question.comments[id]);
    }

    let tags = {};
    if(this.props.tags){
      tags = this.props.tags;
    }
    return(
      <div className="content">
        <section className="detail">
          {this.authorFunctions()}
          <h3>{question.title}</h3>
          {body}
        <TagIndex tags={tags}
          questionTags={question.tag_ids}
          question={question}
          updateQuestion={this.props.updateQuestion}/>
        </section>
        <AnswerIndex
          answers={answers}
          question={question}
          currentUser={this.props.currentUser}
          createAnswer={this.props.createAnswer}
          updateAnswer={this.props.updateAnswer}
          deleteAnswer={this.props.deleteAnswer}
        />

        <CommentIndex
          comments={comments}
          question={question}
          currentUser={this.props.currentUser}
          createComment={this.props.createComment}
          updateComment={this.props.updateComment}
          deleteComment={this.props.deleteComment}
        />

      </div>
    );
  }
}

export default QuestionDetail;
