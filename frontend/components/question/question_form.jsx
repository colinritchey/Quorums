import React from 'react';

class QuestionForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createQuestion(this.state);
    this.setState({title: "", body: ""});
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){

    return(
      <div>

        <form onSubmit={this.handleSubmit}>

          <label>Title
            <input type="text" placeholder="What is your question?"
              onChange={this.update("title")}
              value={this.state.title}></input>
          </label>

          <label>Body
            <textarea
              onChange={this.update("body")}
              value={this.state.body}></textarea>
          </label>

          <input type="submit"></input>
        </form>


      </div>
    );

  }
}

export default QuestionForm;
