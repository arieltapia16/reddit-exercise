import React from 'react';
import './post.css'

const Post = props => {

  const { data } = props.postSelected;

  return (
    <div className="post-container">
      <div className="post-author">{data.author}</div>
      <div className="post-thumb">
        <img src={data.thumbnail ? data.thumbnail : "https://via.placeholder.com/468?text=No+Image"} alt=""/>
      </div>
      <div>{data.title}</div> 
    </div>
  )
}

export default Post;