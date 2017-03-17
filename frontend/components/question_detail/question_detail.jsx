import React from 'react';
import { Link, hashHistory } from 'react-router';
import QuestionFormContainer from '../question_form/question_form_container';

class QuestionDetail extends React.Component {
  componentDidMount(){
    this.props.fetchQuestion(this.props.params.questionId);
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.quesiton.id !== nextProps.params.postId){
  //     this.props.fetchQuestion(nextProps.params.questionId);
  //   }
  // }
  editLink(id){
    return e => {
      e.preventDefault();
      const url = `/questions/${id}/edit`;
      hashHistory.push(url);
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
    return(
      <div className="content">
        <section className="question-detail">
          <h3>{question.title}</h3>
          {body}
        </section>
        <button onClick={() => this.props.deleteQuestion(question.id)}>Delete</button>
        <button onClick={this.editLink(question.id)}>Edit</button>
      </div>
    );
  }
}

export default QuestionDetail;
