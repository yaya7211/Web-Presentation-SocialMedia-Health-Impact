// src/Xpost.js
import React from 'react';
import './XPost.css';

const Xpost = ({ avatar, username, handle, timestamp, content, images, replies }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-header">
        <img className="avatar" src={process.env.PUBLIC_URL + avatar} alt={`${username}'s avatar`} />
        <div className="user-info">
          <span className="username">{username}</span>
          <span className="handle">@{handle}</span>
        </div>
        <span className="timestamp">{timestamp}</span>
      </div>
      <div className="tweet-content">
        {content}
        {images && images.length > 0 && (
          <div className="images">
            {images.map((image, index) => (
              <img key={index} className="image" src={process.env.PUBLIC_URL + image} alt={`Tweet content ${index + 1}`} />
            ))}
          </div>
        )}
      </div>
      <div className="tweet-footer">
        <button className="tweeter-action-button">
          <span className="icon">💬</span> Reply
        </button>
        <button className="tweeter-action-button">
          <span className="icon">🔁</span> Retweet
        </button>
        <button className="tweeter-action-button">
          <span className="icon">❤️</span> Like
        </button>
        <button className="tweeter-action-button">
          <span className="icon">🔗</span> Share
        </button>
      </div>
      {replies && replies.length > 0 && (
        <div className="tweet-replies">
          {replies.map((reply, index) => (
            <Xpost key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Xpost;
