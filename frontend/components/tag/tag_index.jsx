import React from 'react';
import { Link } from 'react-router';

// import QuestionIndexItem from './question_index_item';
// import QuestionFormContainer from '../question_form/question_form_container';


class TagIndex extends React.Component{
  constructor(props){
    super(props);

    this.state = {tag_ids: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchTags();
  // }

  update(e){
    debugger;
    e.preventDefault();
    let newArray = [];
    if(e.target.checked){
      newArray.push(e.target.value);
    }

    this.setState({ tag_ids: newArray });
  }


  handleSubmit(e){
    e.preventDefault();
    debugger;
    let question = this.props.question;
    question.tag_ids = this.state.tag_ids;

    this.props.updateQuestion(question);
  }


  render(){

    let questionTags = [];
    if(this.props.questionTags){
      questionTags = this.props.questionTags.map((id) => (
        this.props.tags[id]
      ));
      // questionTags = this.props.questionTags;
    }

    let tags = [];
    if(this.props.tags){
      tags = Object.keys(this.props.tags).map((id) => this.props.tags[id]);
    }

    debugger;
    return(
      <div>

        <ul>
          {questionTags.map((tag)=>(
            <li key={tag}>{tag.name}</li>
          ))}
        </ul>


        <form onSubmit={this.handleSubmit}>
          {tags.map((tag, idx) => (
            <label key={idx}>{tag.name}
              <input type="checkbox"
                value={tag.id}
                name="[tag_ids][]"
                onChange={this.update}></input>
            </label>
          ))}



          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TagIndex;
