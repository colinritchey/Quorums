import React from 'react';
import { Link } from 'react-router';

// import QuestionIndexItem from './question_index_item';
// import QuestionFormContainer from '../question_form/question_form_container';


class TagIndex extends React.Component{
  constructor(props){
    super(props);

    this.state = {tag_ids: []};
  }

  render(){

    let questionTags = [];
    debugger;
    if(this.props.questionTags){
      questionTags = this.props.questionTags.map((id) => (
        this.props.tags[id]
      ));
    }

    let tags = [];
    if(this.props.tags){
      tags = Object.keys(this.props.tags).map((id) => this.props.tags[id]);
    }

    return(
      <div className="tag-index">

        <ul>
          {questionTags.map((tag, idx)=>(
            <li className="tag-index-item"
              key={idx}>{tag.name}</li>
          ))}
        </ul>

      </div>
    );
  }
}

export default TagIndex;
