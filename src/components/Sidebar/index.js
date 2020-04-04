import React from 'react';
import moment from 'moment';
import './sidebar.css';

const SideBar  = props => {
  console.log(props.listings)
  const sidebarGroup = props.listings.map( (post, index) => {
    return (
      <div key={post.data.id} className="sidebar-group-container"> 
        <div className="title">
          <div className="no-viewed"/>
            <div className="author">{post.data.author}</div>
            <span>{moment.unix(post.data.created_utc).fromNow()}</span>
        </div>
        <div className="description-container">
          <img className="thumb" 
            src={post.data.thumbnail ? post.data.thumbnail : "https://via.placeholder.com/468?text=No+Image"} 
            alt=""
          />
          <div className="content-text">{post.data.title}</div>
          <div className="select-post">  > </div>
        </div>
        <div className="sidebar-footer">
          <div  className="dismiss-post">
            <div className="cross">X</div>
            <div>Dismiss Post</div>
          </div>
          <div className="comments-numbers">{post.data.num_comments} comments</div>
        </div>
        <div className="separator"></div>
      </div>
    )
  }) 


  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Reddit Posts</div>
      <div>{sidebarGroup}</div> 
    </div>
  )
}

export default SideBar;