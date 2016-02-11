import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as HomeActions from '../actions/HomeActions';

class ControlPanel extends Component {

  render() {
    return (
      <div className="controlPanel">
        <h4 className="title">ControlPanel</h4>
        <div className="form-group">
          <input type="number" placeholder="How many articles?" className="form-control" ref="displayCount"/>
        </div>
        <button className="fetch" onClick={e => this.handleFetch(e)}>Fetch</button>
      </div>
    );
  }

  handleFetch() {
    const {dispatch} = this.props;
    const displayCount = this.refs.displayCount.value;
    HomeActions.fetchPosts(dispatch, displayCount);
  }

  constructor(props, context) {
    super(props, context);
  }

}

ControlPanel.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(ControlPanel);
