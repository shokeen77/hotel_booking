import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageMatrix from './ImageMatrix';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BookingModal from './BookingModal';


function ImageGrid(props) {

  const [apiData, setApiData] = useState([]);
  const [apiLoading, setLoadingApi] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pricePerNight, setpricePerNight] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  useEffect(() => {
    async function imageCollection() {
      try {
        const result = await fetch(`https://hotels-api-4ltr.onrender.com/api/hotels/${props.slug}`);
        let jsonData = await result.json();
        setApiData(jsonData);
        setLoadingApi(false);
      }
      catch (error) {
        console.log(error);
      }

    } imageCollection();
  });
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
            {apiData.images.map((item, index) => (
              <ImageMatrix id={index} img={item.img} ></ImageMatrix>

            ))}

          </ImageList>
          {/* <button onClick={()=>console.log(!isModalOpen)} className="noselect-reserve">Reserve</button> */}
          <Button onClick={handleOpen}>Reserve</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {/* <Box className = "modal-style">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box> */}
            {/* {apiData.map(item => { */}
              <BookingModal pricePerNight={apiData.pricePerNight}></BookingModal>
            {/* })} */}

          </Modal>
          <h4 className="detail"></h4>
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
                      {apiData.features.map((item, index) => (
                        <li key={index} >{item.text}</li>
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
                    {apiData.rooms.map((item, index) => (
                      <li key={index} >{item.content}</li>
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
export default ImageGrid;

