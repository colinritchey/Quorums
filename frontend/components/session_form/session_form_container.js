import { connect } from 'react-redux';
import { login, signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}) => ({
  loggedIn: !!(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
