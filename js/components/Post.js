import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-fa';
import TagList from './TagList';

class Post extends Component {
  render() {
    const {post, dispatch} = this.props;
    var user = post.user;
    var userId = user.id;
    var userUrl = `${__QIITA_ENDPOINT}/${userId}`;
    return (
      <article className="post">
        <div className="userIcon">
          <a href={userUrl}>
            <img className="userIcon" title={userId} src={user.profile_image_url}/>
          </a>
        </div>
        <div className="postBody">
          <div className="postHeader">
            <div className="user">
              <a href={userUrl}>{`@${userId}`}</a>
            </div>
            <div className="postedTime" title="投稿日: 2015/11/02 20:45:15">約15時間前</div>
          </div>
          <div className="postHeading">
            <h1 className="title">
              <a href={post.url}>{post.title}</a>
            </h1>
            <TagList tags={post.tags}/>
            <div className="stats">
              <div className="comments"><Icon name="comments" /> NaN</div>
              <div className="likes"><Icon name="thumbs-up" /> NaN</div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default connect(state => state.Sample)(Post)
