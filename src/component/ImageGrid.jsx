import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageMatrix from './ImageMatrix';





export default function ImageGrid(props) {

  const [apiData, setApiData] = useState([]);
  const [apiLoading, setLoadingApi] = useState(true);
  async function fetchApi() {
    try {
      const result = await fetch(`https://hotels-api-4ltr.onrender.com/api/hotels/${props.slug}`);
      let jsonData = await result.json();
      setApiData(jsonData);
      setLoadingApi(false);
    }
    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchApi();
  }, [])
  return (
    <div className="main">
      {apiLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>

      ) : (
        <>
          <div className='hotel-heading'>{apiData.name}</div>
          <ImageList sx={{}} cols={3} rowHeight={700}>
            {apiData.images.map((item) => (
              <ImageMatrix id={item.id} img={item.img} ></ImageMatrix>

            ))}
          
           
          </ImageList>

          <h4 className="detail">Itinerary</h4>
          <section className="design-section">
            <div className="timeline">

              {/* TimeLine-1 */}
              <div className="timeline-empty">
                <h4 className='itenary-heading-aside'>About This Place</h4>
              </div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>

              <div className="itenary timeline-content">
                <h1 className='hotel-itenary'>{apiData.aboutThePlace}</h1>
              </div>






                {/* TimeLine-2 */}
                
              <div className="timeline-empty-second">
                <div className="itenary timeline-content">
                  <h1 className='hotel-itenary'>  
                  <ul>
            {apiData.features.map((item) => (
              <li key={item.id} >{item.text}</li>
              ))}
            </ul></h1>
                </div>
              </div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              {/* TimeLine-3 */}
              <div className="timeline-empty">
                <h4 className='itenary-heading-aside-rooms'>Features</h4>
              </div>
              <div className="timeline-empty">
                <h4 className='itenary-heading-aside-rooms'>Rooms</h4>
              </div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>

              <div className="itenary timeline-content">
                <h1 className='hotel-itenary'>
                <ul>
            {apiData.rooms.map((item) => (
              <li key={item.id} >{item.content}</li>
              ))}
            </ul>
                </h1>
              </div>



            </div>
          </section>
        </>
      )}

    </div>

  );
}


