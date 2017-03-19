import React from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionFormContainer from '../question_form/question_form_container';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

class QuestionDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answer: {body: ""},
      comment: {body: ""}
    };

    this.authorFunctions = this.authorFunctions.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestion(this.props.params.questionId);
  }

  authorFunctions(){
    let currentUser = this.props.currentUser;
    let owner = this.props.question.user;
    let question = this.props.question;

    if(currentUser.id === owner.id){
      return (
        <section className="quesiton-button-container">
          <DeleteFormModal
            question={question}
            deleteQuestion={this.props.deleteQuestion} />

          <FormModal buttonText={"Edit"} question={question}/>
        </section>
      );
    } else {
      return(
        <section></section>
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

    let authorButtons = this.authorFunctions();

    let answers = [];
    if(question.answers){
      answers = Object.keys(question.answers).map((id) => question.answers[id]);
    }

    let comments = [];
    if(question.comments){
      comments = Object.keys(question.comments).map((id) => question.comments[id]);
    }

    return(
      <div className="content">
        <section className="question-detail">
          <h3>{question.title}</h3>
          {body}
        </section>
        <h3>Answers</h3>
        <ul>
          {answers.map((answer, idx) => (
            <li key={idx}>
              {answer.body}
            </li>
          ))}
        </ul>

        <h3>Comments</h3>
        <ul>
          {comments.map((comment, idx) => (
            <li key={idx}>
              {comment.body}
            </li>
          ))}
        </ul>

        <form onSubmit={this.handleAnswer}>
          <label>Answer Body
            <input type="text"
              onChange={this.update("answer", "body")}
              value={this.state.answer.body}/>
          </label>

          <input type="submit" />
        </form>

        <form onSubmit={this.handleComment}>
          <label>Comment Body
            <input type="text"
              onChange={this.update("comment", "body")}
              value={this.state.comment.body}/>
          </label>

          <input type="submit" />
        </form>

        {authorButtons}
      </div>
    );
  }
}

export default QuestionDetail;
