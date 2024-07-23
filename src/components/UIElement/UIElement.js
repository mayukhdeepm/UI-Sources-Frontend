import React, { useState } from "react";
import "./UIElement.css";

const UIElement = () => {
  const [activeView, setActiveView] = useState("2D");
  const [filters, setFilters] = useState({
    "2D": ["Overlay / Modal", "Buttons", "Card", "List"],
    "3D": ["3D Model", "AR Scene", "VR Environment"],
    XR: ["Mixed Reality", "Gesture Control", "Spatial Audio"],
  });
  const [newFilter, setNewFilter] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    CONTROL: true,
    OVERLAY: true,
    VIEWS: true,
    IMAGERY: false,
    MISC: false,
  });

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
    "image11.jpg",
    "image12.jpg",
  ];

  const toggleView = (view) => {
    setActiveView(view);
  };

  const addFilter = () => {
    if (newFilter.trim()) {
      setFilters((prev) => ({
        ...prev,
        [activeView]: [...prev[activeView], newFilter.trim()],
      }));
      setNewFilter("");
    }
  };

  const removeFilter = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [activeView]: prev[activeView].filter((f) => f !== filter),
    }));
  };

  const clearAllFilters = () => {
    setFilters((prev) => ({
      ...prev,
      [activeView]: [],
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const categoryItems = {
    CONTROL: [
      "Buttons",
      "Floating Action Buttons (FAB)",
      "Tabs",
      "Switch & Toggle",
      "Filter",
    ],
    OVERLAY: ["Overlay / Modal", "Full Screen Overlay"],
    VIEWS: ["Card", "List", "Grid"],
    IMAGERY: ["Icon", "Photo", "Video"],
    MISC: ["Misc Item 1", "Misc Item 2"],
  };

  return (
    <div className="ui-flows">
      <div className="sidebar">
        <div className="view-buttons">
          {["2D", "3D", "XR"].map((view) => (
            <button
              key={view}
              className={`view-button ${activeView === view ? "active" : ""}`}
              onClick={() => toggleView(view)}
            >
              {view} VIEW
            </button>
          ))}
        </div>

        <div className="filter-section">
          <div className="filter-header">
            <h3>FILTERS</h3>
            <button onClick={clearAllFilters} className="clear-all-btn">
              CLEAR ALL
            </button>
          </div>
          <div className="filter-tags">
            {filters[activeView].map((filter, index) => (
              <span key={index} className="filter-tag">
                {filter}
                <button
                  onClick={() => removeFilter(filter)}
                  className="remove-filter"
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <div className="add-filter">
            <input
              type="text"
              value={newFilter}
              onChange={(e) => setNewFilter(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addFilter()}
              placeholder="Add new filter"
            />
          </div>
        </div>
        <div className="divider"></div>
          
        <div className="releases-section">
          <h3>RELEASES</h3>
          <select>
            <option>April 2024</option>
          </select>
        </div>
        <div className="divider"></div>

        {Object.entries(categoryItems).map(([section, items]) => (
          
          <div key={section} className="filter-category">
            <h3 onClick={() => toggleSection(section)}>
              {section}
              <span
                className={`arrow ${expandedSections[section] ? "open" : ""}`}
              >
                ⌃
              </span>
              
            </h3>
            {expandedSections[section] && (
              <div className="category-items">
                {items.map((item, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      checked={filters[activeView].includes(item)}
                      onChange={() => {
                        if (filters[activeView].includes(item)) {
                          removeFilter(item);
                        } else {
                          setFilters((prev) => ({
                            ...prev,
                            [activeView]: [...prev[activeView], item],
                          }));
                        }
                      }}
                    />
                    {item}
                    
                  </label>
                  
                ))}
        </div>
            )}
        <div className="divider"></div>
        </div>
        ))}
      </div>
      
      <div className="image-section">
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={`https://picsum.photos/200/300?random=${index}`}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIElement;
