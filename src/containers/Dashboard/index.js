import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import Post from '../../components/Post';
import { FetchData, SelectPost } from '../../actions/fetchDataAction.js';
import { get } from 'lodash';

import './Dashboard.css';

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  selectPost = (post) => {
    this.props.selectPost(post)
  }

  render() {
    return (
      <div className="main-container">
        <Sidebar 
          listings={this.props.listings}
          selectPost={this.selectPost}
          viewedPosts={this.props.viewedPosts}
        />
        {!this.props.postSelected && this.props.listings.length &&
          <Post postSelected={this.props.listings[0]} />
        }
        {this.props.postSelected &&
          <Post postSelected={this.props.postSelected} />
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(FetchData()),
  selectPost: post => dispatch(SelectPost(post)),
})

const mapStateToProps = state => {
  console.log(state)
  return {
    listings: get(state.initialData, 'result.data.children', []),
    postSelected: state.post.postSelected,
    viewedPosts: state.post.viewedPosts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);