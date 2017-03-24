import React from 'react';

class AnswerForm extends React.Component{
  constructor(props){
    super(props);
    if(this.props.answer){
      this.state = { body: this.props.answer.body };
    } else {
      this.state = { body: "" };
    }

    this.state.hasError = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showError = this.showError.bind(this);

  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let answer = this.state;

    if(answer.body === ""){
      this.setState({hasError: true});
    } else {
      this.setState({hasError: false});
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

  }

  showError(){
    if(this.state.hasError){
      return(
        <div className="error-container">
          Text can't be blank
        </div>
      );
    } else {
      return("");
    }
  }

  render(){
    return(
      <div className="form-container">

        <form onSubmit={this.handleSubmit} className="form">
          {this.showError()}
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
