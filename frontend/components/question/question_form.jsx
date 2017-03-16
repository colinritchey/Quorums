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
    let user = this.props.currentUser.username;

    return(
      <div className="question-form-container">
        <form onSubmit={this.handleSubmit} className="question-form">
          <h3><i className="fa fa-user" aria-hidden="true"></i> {user}</h3>

          <input type="text" placeholder="What is your question?"
            onChange={this.update("title")}
            value={this.state.title}></input>

          <textarea
            onChange={this.update("body")}
            placeholder="Go into more detail (Optional)"
            value={this.state.body}></textarea>
          <section className="question-form-submit">
            <input type="submit"></input>
          </section>
        </form>


      </div>
    );

  }
}

export default QuestionForm;
