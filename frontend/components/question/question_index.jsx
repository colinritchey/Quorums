import React from 'react';
import { Link } from 'react-router';

import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from './question_form_container';


class QuestionIndex extends React.Component{
  componentDidMount(){
    this.props.fetchQuestions();
  }

  render(){
    return(
      <div className="quesitons-container col col-3-4">
        <QuestionFormContainer />
        <ul>
          {this.props.questions.map((question, idx) => (
            <QuestionIndexItem
              key={idx}
              question={question} />
          ))}
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
