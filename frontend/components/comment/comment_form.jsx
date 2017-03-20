import React from 'react';

class CommentForm extends React.Component{
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
    let comment = this.state;
    comment.question_id = this.props.questionId;
    comment.parent_comment_id = this.props.parentCommentId;
    this.props.createComment(comment);

    this.setState({ body: ""});
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
