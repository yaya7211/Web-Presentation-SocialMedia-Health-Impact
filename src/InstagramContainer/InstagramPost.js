// src/Post.js
import React from 'react';
import './InstagramPost.css';

const InstagramPost = ({ avatar, username, image, likes, caption, comments }) => {
  return (
    <div className="instagram-post-container">
      <div className="instagram-header">
        <img className="instagram-avatar" src={avatar} alt={`${username}'s avatar`} />
        <span className="username">{username}</span>
      </div>
      <img className="instagram-image" src={image} alt="Post content" />
      <div className="instagram-footer">
        <div className="instagram-actions">
          <div>  
            <button className="instagram-action-button">❤️</button>
            <button className="instagram-action-button">🗨️</button>
            <button className="instagram-action-button">➤</button>
          </div>
          <button className="instagram-action-button">🔖</button>
        </div>
        <div className="likes">{likes} likes</div>
        <div className="caption">
          <span className="username">{username}</span> {caption}
        </div>
        <div className="comment-section">
          {comments.map((comment, index) => (
            <div className="comment" key={index}>
              <span className="username">{comment.username}</span> {comment.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
