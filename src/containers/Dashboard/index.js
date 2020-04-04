import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import Post from '../../components/Post';
import { FetchData } from '../../actions/fetchDataAction.js';
import { get } from 'lodash';

import './Dashboard.css';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="main-container">
        <Sidebar listings={this.props.listings}/>
        <Post/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(FetchData())
})

const mapStateToProps = state => {
  return {
    listings: get(state.initialData, 'result.data.children', []),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);