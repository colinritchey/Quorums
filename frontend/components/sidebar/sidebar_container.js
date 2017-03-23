import { connect } from 'react-redux';
import {  updateFilter } from '../../actions/filter_actions';
import { fetchTags } from '../../actions/tag_actions.js';

import Sidebar from './sidebar';

const mapStateToProps = (state) => {
  let currentUser = null;
  if(state.session.currentUser){
    currentUser = state.session.currentUser;
  }

  let tags = Object.keys(state.tags).map((id) => state.tags[id]);

  return { currentUser, tags };
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchTags: () => dispatch(fetchTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
