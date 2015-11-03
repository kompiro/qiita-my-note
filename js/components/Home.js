import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import PostList from './PostList';

@connect(state => ({
  posts: state.Posts.posts
}))
class Home extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    HomeActions.fetchPosts(dispatch);
  }

  render() {
    const {posts, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <div className="posts">
          <PostList posts={posts} />
        </div>
      </main>
    );
  }
}

export default Home
