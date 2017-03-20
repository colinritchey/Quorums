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
    // let question = this.props.question;
    // debugger;
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

  // componentWillReceiveProps(nextProps) {
  //   debugger;
  //   let questionId = nextProps.question.id;
  //   if(nextProps.question && nextProps.question.id !== this.props.question.id){
  //     this.props.fetchQuestion(parseInt(questionId));
  //   }
  // }

  authorFunctions(){
    let currentUser = this.props.currentUser;
    let owner = this.props.question.user;
    let question = this.props.question;
    let answers = [];
    if(question.answers){
      answers = Object.keys(question.answers).map((id) => question.answers[id]);
    }

    if(currentUser.id === owner.id){
      return (
        <section className="button-container">
          <DeleteFormModal
            question={question}
            deleteQuestion={this.props.deleteQuestion} />

          <FormModal buttonText={"Edit"} question={question}/>
        </section>
      );
    } else {
      return(
        <section className="button-container">


          <FormModal
            createAnswer={this.props.createAnswer}
            questionId={this.props.question.id}
            buttonText={"Answer"} />
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
          <CommentIndex comments={this.props.question.comments} />
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
