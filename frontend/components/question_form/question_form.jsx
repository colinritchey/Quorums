import React from 'react';

class QuestionForm extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props.question;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if (this.props.params) {
      this.props.fetchQuestion(this.props.params.questionId);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);

    if(this.props.formType === "edit"){
      this.props.closeModal();
    }
    this.setState({title: "", body: ""});

  }

  updateTagIds(){
    return e => {
      e.preventDefault();
      debugger;
      let newArray = [];
      if(e.target.checked){
        newArray.push(e.target.value);
      }

      this.setState({ tag_ids: newArray });
    };
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    let user = this.props.currentUser.username;
    let form = this.props.formType;
    let tagList = Object.keys(this.props.tags).map((id) => this.props.tags[id]);
    let classTextArea = form === "new" ? "" : "form-textarea-edit";

    // debugger;
    return(
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">

          <h3><i className="fa fa-user" aria-hidden="true"></i> {user}</h3>

          <input type="text" placeholder="What is your question?"
            onChange={this.update("title")}
            value={this.state.title}></input>

          <textarea
            onChange={this.update("body")}

            placeholder="Go into more detail (Optional)"
            value={this.state.body}></textarea>
          <ul className="tag-list-form">
            {tagList.map((tag, idx) => (
              <li className="tag-item-form">
                <label key={idx}>{tag.name}
                  <input type="checkbox"
                    value={tag.id}
                    name="[tag_ids][]"
                    onChange={this.updateTagIds()}></input>
                </label>
              </li>
            ))}
          </ul>

          <section className="form-submit">
            <input type="submit"></input>
          </section>

        </form>

      </div>
    );

  }
}

export default QuestionForm;
