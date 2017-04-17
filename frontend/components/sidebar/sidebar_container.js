import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { fetchTags } from '../../actions/tag_actions.js';
import { updateUser } from '../../actions/session_actions.js';
import { fetchQuestions } from '../../actions/question_actions.js';

import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => {
  let currentUser = null;
  if(state.session.currentUser){
    currentUser = state.session.currentUser;
  }

  let formType = ownProps.formType;
  let filter = state.filter;

  let tags = Object.keys(state.tags).map((id) => state.tags[id]);

  return { currentUser, tags, formType };
};

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchTags: () => dispatch(fetchTags()),
  updateUser: (user) => dispatch(updateUser(user)),
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
