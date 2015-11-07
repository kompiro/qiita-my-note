import {TITLE_CHANGED,POSTS_FETCHED} from '../constants/ActionTypes';
import 'isomorphic-fetch';
import Qiita from 'qiita-js';
import _ from 'lodash';

Qiita.setEndpoint(__QIITA_ENDPOINT);
Qiita.setToken(__QIITA_TOKEN);

export function fetchPosts(dispatch, displayCount) {
  Qiita.Resources.Item.list_items(
      { per_page: displayCount}
  ).then(response => {
    dispatch({
      type: POSTS_FETCHED,
      posts: response
    });
  });
}

export function changeTitle(text) {
  return {
    type: TITLE_CHANGED,
    text
  }
}
