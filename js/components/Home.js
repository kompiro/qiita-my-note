import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import PostList from './PostList';
import ControlPanel from './ControlPanel';

@connect(state => ({
  posts: state.posts
}))
class Home extends Component {
  render() {
    const {posts, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <div>
        <PostList posts={posts}/>
        <ControlPanel/>
      </div>
    );
  }
}

export default Home
