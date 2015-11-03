import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  posts: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.POSTS_FETCHED:
      return {...state, posts: action.posts};
    default:
      return state;
  }
}
