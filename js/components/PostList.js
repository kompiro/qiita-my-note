import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Post from './Post';

class PostList extends Component {
  render() {
    var postNodes = this.props.posts.map((post)=>{
      return (
        <Post post={post} key={post.id}/>
      )
    });
    return (
        <div className="postList">
          {postNodes}
        </div>
    )
  }
}

export default PostList