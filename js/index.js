import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App';

const initialData = {
  posts : {
            posts : [{ coediting: false,
                      created_at: '2016-01-30T17:16:39+09:00',
                      id: '5af6c8f65472e450a45c',
                      private: false,
                               tags:
                                 [ { name: '日報', versions: [] },
                               { name: '日報/エンジニア', versions: [] } ],
                               title: '2016/01/29 kompiro JIRAが苦手な理由',
                               updated_at: '2016-01-30T17:16:39+09:00',
                               url: 'https://freee.qiita.com/kompiro/items/5af6c8f65472e450a45c',
                               user:
                               { description: '',
                                 facebook_id: 'kompiro',
                                 followees_count: 30,
                                 followers_count: 50,
                                 github_login_name: 'kompiro',
                                 id: 'kompiro',
                                 items_count: 31,
                                 linkedin_id: '',
                                 location: 'Tokyo, Japan',
                                 name: 'Hiroki Kondo',
                                 organization: '',
                                 permanent_id: 4244,
                                 profile_image_url: 'https://secure.gravatar.com/avatar/e7bf914803991968f32535ff47cee5d2?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png',
                                 twitter_screen_name: 'kompiro',
                                 website_url: 'http://kompiro.hatenablog.com' } }] }
}
const store = configureStore(initialData);

render(
  <App store={store}/>,
  document.getElementById('main')
);
