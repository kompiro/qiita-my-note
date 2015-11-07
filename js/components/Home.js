import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import PostList from './PostList';
import ControlPanel from './ControlPanel';

@connect(state => ({
  posts: state.Posts.posts
}))
class Home extends Component {
  render() {
    const {posts, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <PostList posts={posts}/>
        <ControlPanel/>
      </main>
    );
  }
}

export default Home
