import React from 'react';
import { Link } from 'react-router';

class QuestionIndex extends React.Component{
  componentDidMount(){
    this.props.fetchQuestions();
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.questions.map((question) => (
            <li key={question.id}>{question.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
