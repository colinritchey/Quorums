import React from 'react';

class AnswerForm extends React.Component{
  constructor(props){
    super(props);
    if(this.props.answer){
      this.state = { body: this.props.answer.body };
    } else {
      this.state = { body: "" };
    }
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

    if(this.props.answer !== undefined){
      answer.id = this.props.answer.id;
      this.props.updateAnswer(answer);
    }else{
      this.props.createAnswer(answer);
    }

    this.setState({ body: ""});
    this.props.closeModal();
  }

  render(){
    return(
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <textarea
            onChange={this.update("body")}
            value={this.state.body}
            placeholder="What is your answer?"
            className="modal-text">
          </textarea>

          <section className="form-submit">
            <input type="submit"></input>
          </section>
        </form>

      </div>
    );
  }

}

export default AnswerForm;
