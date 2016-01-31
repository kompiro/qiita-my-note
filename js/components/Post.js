import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-fa';
import TagList from './TagList';
import moment from 'moment';

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
            <div className="postedTime" title={`投稿日: ${moment(post.created_at).format('YYYY/MM/DD HH/mm')}`}>{ moment(post.created_at).format('YYYY/MM/DD') }</div>
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

export default connect(state => state.posts)(Post)
