import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App';

const req = indexedDB.open('qiita_my_note', 5);
req.addEventListener('upgradeneeded', event => {
  const db = event.target.result;
  if (db.objectStoreNames.contains('posts')) {
    db.deleteObjectStore('posts');
  }
  db.createObjectStore('posts', {keyPath: 'created_at_date'});
});

const iterateDB = posts => {
  return event => {
    const cursor = event.target.result;
    if (cursor) {
      posts.push(cursor.value);
      cursor.continue();
    } else {
      const initialData = {
        posts: {
          posts: posts,
        },
      };
      const store = configureStore(initialData);
      render(
        <App store={store}/>,
        document.getElementById('main')
      );
    }
  };
};

const connected = event => {
  const db = event.target.result;
  const tx = db.transaction(['posts'], 'readwrite');
  const store = tx.objectStore('posts');
  const curReq = store.openCursor(null, 'prev');
  const posts = [];
  curReq.addEventListener('success', iterateDB(posts));
};

req.addEventListener('success', connected);


