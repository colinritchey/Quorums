import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({session}) => {
  let currentUser = null;
  if(session.currentUser){
    currentUser = session.currentUser;
  }
  return { currentUser };
};

export default connect(
  mapStateToProps,
  null
)(Home);
