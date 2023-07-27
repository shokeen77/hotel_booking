import React, { useState, useEffect } from 'react';
import Card from "./Card";
import ImageGrid from './ImageGrid';



const HotelCard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dark, darkMode] = useState([]);


  const fetchApi = async () => {
    try {
      let result = await fetch('https://hotels-api-4ltr.onrender.com/api/hotels')
      let jsonData = await result.json();
      setCards(jsonData);
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);





  return (
    <div className="main">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <ul className="cards">
          {cards.map((card, index) => (
            <li className="cards_item" key={index} >

              <Card data={card} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelCard;
