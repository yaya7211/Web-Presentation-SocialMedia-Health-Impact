import React from 'react';
import './Main.css';
import InstagramContainer from "../InstagramContainer/InstagramContainer"
import XContainer from '../XContainer/XContainer';
import MessengerConversationsList from '../MessengerContainer/MessengerConversations';
import { useState } from 'react';
import data from "../data.json"

const Main = () => {

  
    const postsData = data.postsData
    
    
    const tweetsData = data.tweetsData

      const conversationsData = data.conversationsData

    const [currentView, setView] = useState('Notre enquête');
    const views = {
        "Notre enquête" : <InstagramContainer postsData={postsData}/>,
        "Ce que disent les experts" : <XContainer tweetsData={tweetsData}/>,
        "Témoignages" : <MessengerConversationsList conversations={conversationsData} />,
    }

  return (
    <div className='main'>
        <div className="nav-bar">
            {Object.keys(views).map(view =>
                <div className={`nav-item ${currentView === view ? 'active' : ''}`} onClick={() => setView(view)}>{view}</div>
            )}
        </div>
        <div className='information-containers'>
            {views[currentView]}
        </div>
    </div>
  );
};

export default Main;
