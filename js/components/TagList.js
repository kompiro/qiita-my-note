import React, {Component} from 'react';

class TagList extends Component {
  render() {
    const {tags} = this.props;
    const tagNodes = tags.map((tag)=>{
      const tagUrl = `${__QIITA_ENDPOINT}/${tag.name}`;
      return (
        <div className="tag" key={tag.name}><a href={tagUrl} className="tagBase"><span className="tagName">{tag.name}</span></a></div>
      );
    });
    return (
      <div className="tags">
        {tagNodes}
      </div>
    );
  }
}

TagList.propTypes = {
  tags: React.PropTypes.array,
};

export default TagList;
