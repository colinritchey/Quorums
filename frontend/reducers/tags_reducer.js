import { RECEIVE_TAGS,
  RECEIVE_TAG } from '../actions/tag_actions';
import merge from 'lodash/merge';

const TagsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      let newQuestion = {[action.tag.id]: action.tag};
      return merge({}, oldState, newQuestion);
    default:
      return oldState;
  }
};

export default TagsReducer;
