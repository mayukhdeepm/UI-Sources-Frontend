import React, { useState } from 'react';
import './UIScreens.css';

const UIScreens = () => {
  const [selectedRelease, setSelectedRelease] = useState('April 2024');
  const [filters, setFilters] = useState({
    homeScreen: false,
    overlay: false,
    settingPreferences: false,
    menu: false,
    tutorial: false,
    map: false,
    searchFilter: false,
    onboarding: false,
  });

  const handleReleaseChange = (event) => {
    setSelectedRelease(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const media = [
    { type: 'video', src: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/2795405-hd_720_1280_25fps.mp4' },
    { type: 'image', src: 'image1.jpg' },
    { type: 'image', src: 'image2.jpg' },
    { type: 'image', src: 'image3.jpg' },
    { type: 'image', src: 'image4.jpg' },
    { type: 'image', src: 'image5.jpg' },
    { type: 'image', src: 'image6.jpg' },
    { type: 'image', src: 'image7.jpg' },
    { type: 'image', src: 'image8.jpg' },
    { type: 'image', src: 'image9.jpg' },
    { type: 'image', src: 'image10.jpg' },
    { type: 'image', src: 'image11.jpg' },
    { type: 'image', src: 'image12.jpg' },
  ];

  return (
    <div className="app-page2">
      <div className="content">
        <div className="content-layout">
          <div className="sidebar1">
            <h2>FILTERS</h2>
            <div className="divider"></div>
            <div className="dropdown1">
              <h3>RELEASES</h3>
              <select value={selectedRelease} onChange={handleReleaseChange}>
                <option value="April 2024">April 2024</option>
              </select>
            </div>
            <div className="divider"></div>
            <div className="checkboxes1">
              {Object.entries(filters).map(([key, value]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={handleFilterChange}
                  />
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
              ))}
            </div>
            <div className="divider"></div>
          </div>
          <div className="image-section1">
            <div className="image-grid">
              {media.map((item, index) => (
                <div key={index} className="media-item1">
                  {item.type === 'video' ? (
                    <video width="100%" height="400" autoPlay muted loop>
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={`https://picsum.photos/200/300?random=${index}`} alt={`Media ${index + 1}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIScreens;