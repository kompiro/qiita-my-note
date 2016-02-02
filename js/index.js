import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App';

const req = indexedDB.open('qiita_my_note',4);
req.addEventListener("success", event => {
  const db = event.target.result;
  const tx = db.transaction(['posts'],'readwrite');
  const store = tx.objectStore('posts');
  const curReq = store.openCursor(null, IDBCursor.NEXT);
  const posts = [];
  curReq.addEventListener('success', event => {
    var cursor = event.target.result;
    if(cursor){
      posts.push(cursor.value);
      cursor.continue();
    } else {
      const initialData = {
        posts : {
          posts : posts
        }
      }
      const store = configureStore(initialData);
      render(
        <App store={store}/>,
        document.getElementById('main')
      );
    }
  });
});


