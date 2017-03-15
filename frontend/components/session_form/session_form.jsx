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

    if(this.props.formType === "signup"){
      this.props.signup(user);
    } else {
      this.props.login(user);
    }

  }

  handleGuest(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"});
  }



  render(){
    let text = {display: "Sign Up", link: "/login", button: "Log In"};

    if(this.props.formType === "login"){
      text = {display: "Log In", link: "/signup", button: "Sign Up"};
    }

    return(
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          <h3>{text.display}</h3>
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
              value={text.display}/>
          </section>

          <ul className="session-form-error-index">
            {this.props.errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>

        </form>


        <span>Would you like to <Link to={text.link} >{text.button}</Link> instead?</span>

      </div>
    );
  }
}

export default SessionForm;
