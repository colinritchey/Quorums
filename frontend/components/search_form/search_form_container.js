import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {  updateFilter } from '../../actions/filter_actions';

import SearchForm from './search_form';

const mapStateToProps = ({session}) => {
  let currentUser = null;
  if(session.currentUser){
    currentUser = session.currentUser;
  }
  return { currentUser };
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
