import React from 'react';
import { Link } from 'react-router';

import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component{
  componentDidMount(){
    this.props.fetchQuestions();
  }

  render(){
    return(
      <div className="quesitons-container col col-3-4">
        <ul>
          {this.props.questions.map((question, idx) => (
            <QuestionIndexItem 
              key={idx}
              title={question.title}
              body={question.body}
              user={question.user}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
