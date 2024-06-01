// src/MessengerConversation/MessengerConversationsList.js
import React, { useState } from 'react';
import MessengerConversation from './MessengerConversation';

const MessengerConversations = ({ conversations }) => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <div className="messenger-container">
      <div className="conversations-list">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`conversation-item ${selectedConversation.id === conversation.id ? 'active' : ''}`}
            onClick={() => setSelectedConversation(conversation)}>
            <img className="conversation-avatar" src={process.env.PUBLIC_URL + conversation.avatar} alt="Avatar" />
            <div className="conversation-info">
              <span className="conversation-name">{conversation.name}</span>
            </div>
          </div>
        ))}
      </div>
      <MessengerConversation {...selectedConversation}/>
    </div>
  );
};

export default MessengerConversations;
