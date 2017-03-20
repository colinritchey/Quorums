import React from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionFormContainer from '../question_form/question_form_container';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

import AnswerIndex from '../answer/answer_index';
import AnswerForm from '../answer/answer_form';

import CommentIndex from '../comment/comment_index';

class QuestionDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      answer: {body: ""},
      comment: {body: ""},
      commentShow: false
    };

    this.authorFunctions = this.authorFunctions.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.displayComments = this.displayComments.bind(this);
    this.toggleComments = this.toggleComments.bind(this);

  }

  componentDidMount(){
    this.props.fetchQuestion(parseInt(this.props.params.questionId));
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
          <DeleteFormModal
            item={question}
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

  handleAnswer(e){
    e.preventDefault();
    let answer = this.state.answer;
    answer.question_id = this.props.question.id;
    this.props.createAnswer(answer);

    this.setState({ body: ""});
  }

  toggleComments(){
    this.setState({commentShow: !this.state.commentShow});
  }

  displayComments(){
    if(this.state.commentShow){
      return(
        <div>
          <CommentIndex
            comments={this.props.question.comments}
            createComment={this.props.createComment}
          />
          <button onClick={this.toggleComments}>Hide Comments</button>
        </div>
      );
    } else {
      return(
        <div>
          <button onClick={this.toggleComments}>Show Comments</button>
        </div>)
      ;
    }
  }

  handleComment(e){
    e.preventDefault();
    let comment = this.state.comment;
    comment.question_id = this.props.question.id;
    comment.parent_comment_id = null;
    this.props.createComment(comment);

    this.setState({ body: ""});
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

    return(
      <div className="content">
        <section className="detail">
          <h3>{question.title}</h3>
          {body}
        </section>
        {this.authorFunctions()}

        <AnswerIndex answers={answers} />

        {this.displayComments()}

      </div>
    );
  }
}

export default QuestionDetail;
