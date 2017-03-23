import * as APIUtilTag from '../util/tag_api_util';

export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAGS = "RECEIVE_TAGS";

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const fetchTags = () => dispatch => (
  APIUtilTag.fetchTags()
    .then(tags => dispatch(receiveTags(tags)))
);

export const createTag = (tag) => dispatch => (
  APIUtilTag.createTag(tag)
    .then(_tag => dispatch(receiveTag(_tag)))
);
