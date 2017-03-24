import React from 'react';
import { merge } from 'lodash';

class QuestionForm extends React.Component{
  constructor(props){
    super(props);

    this.state = merge({}, this.props.question);
    this.state.hasError = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTagIds = this.updateTagIds.bind(this);
    this.showError = this.showError.bind(this);
  }

  componentDidMount(){
    if (this.props.params) {
      this.props.fetchQuestion(this.props.params.questionId);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.title === ""){
      this.setState({hasError: true});
    } else {
      this.props.action(this.state);

      if(this.props.formType === "edit"){
        this.props.closeModal();
      }
      this.setState({title: "", body: "", tag_ids: [], hasError: false});
    }

  }

  updateTagIds(id){
    return e => {
      let newArray = this.state.tag_ids.slice();

      if(e.target.checked){
        newArray.push(parseInt(id));
      } else {
        newArray = newArray.filter((tag_id) => tag_id !== id);
      }
      this.setState({ tag_ids: newArray });

    };
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  showError(){
    if(this.state.hasError){
      return(
        <div className="error-container">
          Title can't be blank
        </div>
      );
    } else {
      return("");
    }
  }

  render(){
    let state = this.state;

    let user = this.props.currentUser.username;
    let form = this.props.formType;
    let tagList = [];
    if(this.props.tags){
      tagList = Object.keys(this.props.tags).map((id) => this.props.tags[id]);
    }
    let classTextArea = form === "new" ? "" : "form-textarea-edit";

    return(
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form">
          {this.showError()}
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

              <li className="tag-item-form" key={idx}>

                <label>{tag.name}

                </label>
                <input type="checkbox"
                  value={tag.id}
                  name="[tag_ids][]"
                  checked={this.state.tag_ids.includes(tag.id)}
                  onChange={this.updateTagIds(tag.id)}></input>

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
