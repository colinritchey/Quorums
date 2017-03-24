import React from 'react';
import { hashHistory } from 'react-router';

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    hashHistory.push(`/search/${this.state.body.split(" ").join("-")}`);
    this.setState({body: ""});
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Search Bar"
          className="search"
          onChange={this.update('body')}
          value={this.state.body}></input>
        <label>
          <input type="submit" value="Search" className="search-button"></input>
        </label>
      </form>
    );
  }
}

export default SearchForm;
