import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {  updateFilter } from '../../actions/filter_actions';

import Navbar from './navbar';

const mapStateToProps = ({session}) => {
  let currentUser = null;
  if(session.currentUser){
    currentUser = session.currentUser;
  }
  return { currentUser };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
