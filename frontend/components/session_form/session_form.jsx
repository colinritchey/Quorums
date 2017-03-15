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
    let linkToText = linkTo === "/signup" ? "Sign Up" : "Log in";
    // TODO: Clean up code

    return(
      <div className="session-form">

        <ul>
          {this.props.errors.map((err, idx) => (
            <li key={idx}>{err}</li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <h3>{text}</h3>
          <label>
            <input
              type="text"
              placeholder="Username"
              onChange={this.update("username")}
              className="session-form-input"
              value={this.state.username} />
          </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              onChange={this.update("password")}
              className="session-form-input"
              value={this.state.password} />
          </label>

          <section className="section-form-submit-button">

            <input type="submit" onClick={this.handleGuest} value="Demo"></input>
            <input
              type="submit"
              value={text}/>
          </section>
        </form>

        <span>Would you like to <Link to={linkTo} >{linkToText}</Link> instead?</span>

      </div>
    );
  }
}

export default SessionForm;
