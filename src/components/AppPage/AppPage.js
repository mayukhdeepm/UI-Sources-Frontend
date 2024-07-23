import React, { useState } from 'react';
import './AppPage.css';
import { Smartphone, Tablet, Headphones } from 'lucide-react';
import UIScreens from '../UIScreens/UIScreens';
import UIFlows from '../UIFlows/UIFlows';
import UIElement from '../UIElement/UIElement';
import Description from '../Description/Description';

const AppPage = () => {
  const [currentPage, setCurrentPage] = useState('uiscreens');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'uiscreens':
        return <UIScreens />;
      case 'uielement':
        return <UIElement />;
      case 'uiflows':
        return <UIFlows />;
      case 'description':
        return <Description />;
      default:
        return <UIScreens />;
    }
  };

  return (
    <div className="app-page">
      <div className="content">
        <div className="app-info">
          <img src="https://yt3.googleusercontent.com/ytc/AIdro_lMvC21pmuKnN9iC4E3Du7VgxD0EyqyWxfVyTHZXEvywso=s900-c-k-c0x00ffffff-no-rj" alt="App Logo" className="app-logo" />
          <div className="app-details">
            <h1 className="app-title">The Lord of the Rings</h1>
            <p className="app-developer">Cryenx Labs</p>
          </div>
        </div>
        
        <div className="supported-devices">
          <h2>SUPPORTED DEVICES</h2>
          <div className="device-icons">
            <div className="device">
              <Smartphone size={24} />
              <span>Handheld</span>
            </div>
            <div className="device">
              <Tablet size={24} />
              <span>Tablet</span>
            </div>
            <div className="device">
              <Headphones size={24} />
              <span>Headset</span>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="app-store-btn">
            <i className="fab fa-app-store"></i> VIEW IN APP STORE
          </button>
          <button className="play-store-btn">
            <i className="fab fa-google-play"></i> VIEW IN PLAY STORE
          </button>
          <button className="save-app-btn">
            <i className="fas fa-bookmark"></i> SAVE APP
          </button>
        </div>
      </div>

      <div className="button-row">
        <button onClick={() => setCurrentPage('uiscreens')} className={`nav-button ${currentPage === 'uiscreens' ? 'active' : ''}`}>
          <span className="icon">&#9634;</span>
          UI SCREENS
        </button>
        <button onClick={() => setCurrentPage('uielement')} className={`nav-button ${currentPage === 'uielement' ? 'active' : ''}`}>
          <span className="icon">&#9635;</span>
          UI ELEMENTS
        </button>
        <button onClick={() => setCurrentPage('uiflows')} className={`nav-button ${currentPage === 'uiflows' ? 'active' : ''}`}>
          <span className="icon">&#8680;</span>
          UI FLOWS
        </button>
        <button onClick={() => setCurrentPage('description')} className={`nav-button ${currentPage === 'description' ? 'active' : ''}`}>
          <span className="icon">&#9776;</span>
          DESCRIPTION
        </button>
      </div>

      {renderPageContent()}
    </div>
  );
};

export default AppPage;