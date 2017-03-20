import React from 'react';

class AnswerForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let answer = this.state;
    answer.question_id = this.props.questionId;
    this.props.createAnswer(answer);

    this.setState({ body: ""});
    this.props.closeModal();
  }

  render(){
    return(
      <div className="question-form-container">
        <form onSubmit={this.handleSubmit} className="question-form">
          <textarea
            onChange={this.update("body")}
            value={this.state.body}
            placeholder="What is your answer?"
            className="form-textarea-edit">
          </textarea>

          <section className="question-form-submit">
            <input type="submit"></input>
          </section>
        </form>

      </div>
    );
  }

}

export default AnswerForm;
