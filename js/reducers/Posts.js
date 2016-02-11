import * as ActionTypes from '../constants/ActionTypes';

const defaultState = {
  posts: [],
};

export default function posts(state = defaultState, action) {
  switch (action.type) {
  case ActionTypes.POSTS_FETCHED:
    return {...state, posts: action.posts};
  default:
    return state;
  }
}
