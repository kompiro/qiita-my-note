import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TagList extends Component {
  render() {
    const {tags} = this.props;
    const tagNodes = tags.map((tag)=>{
      let tagUrl = `${__QIITA_ENDPOINT}/${tag.name}`;
      return (
        <div className="tag" key={tag.name}><a href={tagUrl} className="tagBase"><span className="tagName">{tag.name}</span></a></div>
      )
    });
    return (
      <div className="tags">
        {tagNodes}
      </div>
    )
  }
}

export default TagList
