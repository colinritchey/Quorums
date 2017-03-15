import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({session}) => {
  let currentUser = null;
  if(session.currentUser){
    currentUser = session.currentUser;
  }
  return { currentUser };
};

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

export default connect(
  mapStateToProps,
  null
)(Home);
