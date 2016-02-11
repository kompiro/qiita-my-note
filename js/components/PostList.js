import React, {Component} from 'react';
import Post from './Post';

class PostList extends Component {
  render() {
    const {posts} = this.props.posts;
    const postNodes = posts.map((post)=>{
      return (
        <Post post={post} key={post.id}/>
      );
    });
    return (
        <div className="postList">
          {postNodes}
        </div>
    );
  }
}

PostList.propTypes = {
  posts: React.PropTypes.object,
};

export default PostList;
