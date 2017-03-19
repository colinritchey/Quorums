import React from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionFormContainer from '../question_form/question_form_container';
import FormModal from '../modals/form_modal';
import DeleteFormModal from '../modals/delete_form';

class QuestionDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {body: ""};

    this.authorFunctions = this.authorFunctions.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
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
    let answer = this.state;
    answer.question_id = this.props.question.id;
    this.props.createAnswer(answer);

    this.setState({ body: ""});
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
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

    return(
      <div className="content">
        <section className="question-detail">
          <h3>{question.title}</h3>
          {body}
        </section>

        <ul>
          {answers.map((answer, idx) => (
            <li key={idx}>
              {answer.body}
            </li>
          ))}
        </ul>

        <form onSubmit={this.handleAnswer}>
          <label>Body
            <input type="text" onChange={this.update("body")} value={this.state.body}/>
          </label>

          <input type="submit" />
        </form>

        {authorButtons}
      </div>
    );
  }
}

export default QuestionDetail;
