import React from 'react';
import { Link } from 'react-router';

class QuestionDetail extends React.Component {
  componentDidMount(){
    this.props.fetchQuestion(this.props.params.questionId);
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.quesiton.id !== nextProps.params.postId){
  //     this.props.fetchQuestion(nextProps.params.questionId);
  //   }
  // }

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

      </div>
    );
  }
}

export default QuestionDetail;
