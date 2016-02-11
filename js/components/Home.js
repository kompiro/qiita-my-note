import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostList from './PostList';
import ControlPanel from './ControlPanel';

@connect(state => ({
  posts: state.posts,
}))
class Home extends Component {
  render() {
    const {posts} = this.props;
    return (
      <div>
        <PostList posts={posts}/>
        <ControlPanel/>
      </div>
    );
  }
}

Home.propTypes = {
  posts: React.PropTypes.array,
  dispatch: React.PropTypes.func,
};

export default Home;
