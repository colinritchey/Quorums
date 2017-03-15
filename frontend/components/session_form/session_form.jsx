import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleGuest(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state, );
    this.props.login({username: "guest", password: "password"});
  }



  render(){
    // TODO: Clean up code
    let text = this.props.formType === "signup" ? "Sign Up" : "Login";
    let linkTo = this.props.formType === "signup" ? "/login" : "/signup";
    let linkToText = linkTo === "/signup" ? "Sign Up" : "Login";
    // TODO: Clean up code

    return(
      <div>
        <h3>{text}</h3>
        <ul>
          {this.props.errors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              onChange={this.update("username")}
              value={this.state.username} />
          </label>

          <label>Password
            <input
              type="password"
              onChange={this.update("password")}
              value={this.state.password} />
          </label>

          <input type="submit" value={text}></input>
        </form>

        <Link to={linkTo}>{linkToText}</Link>
        <button type="submit" onClick={this.handleGuest}>Demo</button>
      </div>
    );
  }
}

export default SessionForm;
