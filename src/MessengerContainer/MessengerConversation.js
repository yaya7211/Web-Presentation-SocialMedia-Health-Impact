// src/MessengerConversation/MessengerConversation.js
import React from 'react';
import './MessengerConversation.css';

const MessengerConversation = ({ name, avatar, messages }) => {
  return (
    <div className="conversation-container">
      <div className="conversation-header">
        <img className="avatar" src={avatar} alt="Avatar" />
        <span className="name">{name}</span>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sent ? 'sent' : 'received'}`}>
            <img className="avatar" src={message.avatar} alt="Avatar" />
            <div className="message-content">
              {message.content}
              <div className="timestamp">{message.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessengerConversation;
