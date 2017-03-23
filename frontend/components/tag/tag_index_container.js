import { connect } from 'react-redux';
import { createTagging, fetchTags } from '../../actions/tag_actions.js';

import TagIndex from './tag_index';

const mapStateToProps = (state, ownProps) => {

  return  {
    questionTags: ownProps.questionTags,
    allTags: Object.keys(state.tags).map((id) => state.tags[id])
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
