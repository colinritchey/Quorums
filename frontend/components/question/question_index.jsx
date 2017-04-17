import React from 'react';
import { Link } from 'react-router';

import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from '../question_form/question_form_container';


class QuestionIndex extends React.Component{
  constructor(props){
    super(props);

    this.state = {loaded: false};
  }

  componentDidMount(){
    this.props.fetchQuestions().then(() => this.setState({ loaded: true }) );

  }

  componentWillUnmount(){
    this.props.clearQuestions();
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

    if(this.state.loaded && this.props.questions.length < 1){
      return (
        // <div className="quesitons-container col col-3-4">
          <div className="search-result-empty">
            <p>Couldn't find matches for "{this.props.searchTitle}"</p>
          </div>
        // </div>
      )
    } else {

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
}

export default QuestionIndex;
