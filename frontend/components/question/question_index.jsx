import React from 'react';
import { Link } from 'react-router';

import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from '../question_form/question_form_container';


class QuestionIndex extends React.Component{
  componentDidMount(){
    this.props.fetchQuestions();
  }

  getForm(){
    if(this.props.formType === 'new'){
      return <QuestionFormContainer formType="new"/>;
    } else {
      return "";
    }
  }

  render(){
    const form = this.getForm();

    return(
      <div className="quesitons-container col col-3-4">
        {form}
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
