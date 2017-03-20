import React from 'react';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    if(this.props.comment){
      this.state = { body: this.props.comment.body };
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
    let comment = this.state;
    comment.question_id = this.props.questionId;

    if(this.props.comment){
      comment.id = this.props.comment.id;
      this.props.updateComment(comment);
    }else{
      this.props.createComment(comment);
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
            placeholder="What is your comment?">
          </textarea>

          <section className="form-submit">
            <input type="submit"></input>
          </section>
        </form>

      </div>
    );
  }

}

export default CommentForm;
