import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';


const cardsData = [
  { id: 1, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 1', p: 'Card 1' },
  { id: 2, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 2', p: 'Card 1' },
  { id: 3, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 3', p: 'Card 1' },
  { id: 4, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 4', p: 'Card 1' },
  { id: 5, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 5', p: 'Card 1' },
  { id: 6, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 6', p: 'Card 1' },
  { id: 7, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 7', p: 'Card 1' },
  { id: 8, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 8', p: 'Card 1' },
  { id: 9, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 9', p: 'Card 1' },
  { id: 10, image: 'https://cdn.glitch.global/4a4fdfdb-83d7-4c92-afd1-8f02869db8e9/Frame%20135.png?v=1720370324291', text: 'Card 10', p: 'Card 1' },
];

const HeaderBanner = () => {
    return (
      <div className="header-banner">
        <div className="banner-text">
          <h1>ALL CATEGORIES</h1>
          <p>20 CATEGORIES</p>
        </div>
      </div>
    );
  };
  
  const FooterSection = () => {
    return (
      <div className="footer-section">
        <h3>Couldn’t find the category, device,<br /> apps or interactions of your choice?</h3>
        <p>Suggest what would you like to see more of, through your <br />suggestions we can help XR designers across the globe</p>
        <button className="explore-button">Suggest Now!</button>
      </div>
    );
  };
  
  const Category = () => {
    const navigate = useNavigate();
    return (
      <div>
        <HeaderBanner />
        <div className="category-container">
          {cardsData.map(card => (
            <div onClick={() => navigate('/filters')} key={card.id} className="category-card1">
              <img src={card.image} alt={card.text} className="card-image" />
              <div className="card-text">{card.text}</div>
              <div className="card-p">{card.p}</div>

            </div>
          ))}
        </div>
        <FooterSection />
      </div>
    );
  };
  
  export default Category;