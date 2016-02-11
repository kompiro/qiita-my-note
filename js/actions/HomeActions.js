import {TITLE_CHANGED, POSTS_FETCHED} from '../constants/ActionTypes';
import 'isomorphic-fetch';
import Qiita from 'qiita-js';

Qiita.setEndpoint(__QIITA_ENDPOINT);
Qiita.setToken(__QIITA_TOKEN);

export function fetchPosts(dispatch, displayCount) {
  Qiita.Resources.Item.list_items(
      { per_page: displayCount}
  ).then(response => {
    const req = indexedDB.open('qiita_my_note', 5);
    req.addEventListener('success', event => {
      const db = event.target.result;
      const tx = db.transaction(['posts'], 'readwrite');
      const store = tx.objectStore('posts');
      response.map(post => {
        const createdAt = new Date(post.created_at).getTime();
        Object.assign(post, {created_at_date: createdAt});
        store.put(post);
      });
      tx.addEventListener('complete', () =>{
        dispatch({
          type: POSTS_FETCHED,
          posts: response,
        });
      });
    });
  });
}

export function changeTitle(text) {
  return {
    type: TITLE_CHANGED,
    text,
  };
}
