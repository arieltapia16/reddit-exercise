import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import Post from '../../components/Post';
import './Dashboard.css';
class Dashboard extends Component {
  render() {
    return (
      <div className="main-container">
        <Sidebar/>
        <Post/>
      </div>
    );
  }
}
export default connect()(Dashboard);