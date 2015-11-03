import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

class Post extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <article className="post">
        <div className="userIcon">
          <a href="https://qiita.com/kompiro">
          <img class="userIcon" title="kompiro" src="https://secure.gravatar.com/avatar/e7bf914803991968f32535ff47cee5d2?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png"/>
          </a>
        </div>
        <div className="postBody">
          <div className="postHeader">
            <div className="user">
              <a href="https://qiita.com/kompiro">@kompiro</a>
            </div>
            <div className="postedTime" title="投稿日: 2015/11/02 20:45:15">約15時間前</div>
          </div>
          <div className="postHeading">
            <h1 className="title">
              <a href="https://qiita.com/kompiro/items/7ddca41bef00444e14c7">reduxを試してみた(1日目) - Reduxをざっくり理解する</a>
            </h1>
            <div className="tags">
              <div className="tag"><a href="http://qiita.com/tags/redux" className="tagBase"><span className="tagName">redux</span></a></div>
            </div>
            <div className="stats">
              <div className="comments"><i className="fa fa-fw fa-comments"></i>0</div>
              <div className="likes"><i className="fa fa-fw fa-thumbs-up"></i>0</div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default connect(state => state.Sample)(Post)
