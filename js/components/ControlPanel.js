import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as HomeActions from '../actions/HomeActions';
import {bindActionCreators} from 'redux';

@connect(state => ({}))
export default class ControlPanel extends Component {

  constructor(props, context) {
    super(props, context);
  }

  handleFetch(e) {
    const {dispatch} = this.props;
    let displayCount = this.refs.displayCount.value;
    HomeActions.fetchPosts(dispatch, displayCount);
  }

  render() {
    return (
      <div className="controlPanel">
        <h4 className="title">ControlPanel</h4>
        <div className="form-group">
          <input type="text" className="form-control" ref="displayCount"/>
        </div>
        <button className="fetch" onClick={e => this.handleFetch(e)}>Fetch</button>
      </div>
    )
  }
}
