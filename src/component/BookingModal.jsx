import React, { useState } from 'react';
import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import moment from 'moment';
import {useHistory} from 'react-router-dom';

function BookingModal(props) {
  const [checkin, setCheckIn] = useState('');
  const [checkout, setCheckOut] = useState('');
  const [numberofguests, setNumberOfGuests] = useState(1); // Default value
  const [diffDays, setDiffDays] = useState(0);

  const handleCheckInOutDateChange = (dateRange) => {
    if (dateRange.length === 2 && dateRange[1] != null) {
      const cin = new Date(dateRange[0]['$d']);
      const cout = new Date(dateRange[1]['$d']);
      setCheckIn(moment(cin).format('DD/MM/YYYY'));
      setCheckOut(moment(cout).format('DD/MM/YYYY'));

      const diffTime = Math.abs(cout - cin);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDiffDays(diffDays);
    }
  };

  const submitButton = async () => {
    const details = JSON.stringify({
      hotelName: props.apiData.name,
      hotelAddress: props.apiData.address,
      numberOfGuests: numberofguests,
      price :  `$${props.apiData.pricePerNight * diffDays}`,
      checkin: checkin,
      checkout: checkout,
      
    });

    console.log('details', details);

    // Add your fetch logic here to post the booking details
    fetch(
      "https://hotel-booking-app-15006-default-rtdb.firebaseio.com/hotel.json",
      {
        method: "POST",
        body: details,
      }
    );
  };

  return (
    <Box>
      <div className="booking-modal-container">
        <div className="booking-modal-content">
          <h2>${props.apiData.pricePerNight}/Night</h2>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="number-of-guests">
              Number of Guests
            </InputLabel>
            <NativeSelect
              value={numberofguests}
              onChange={(event) => setNumberOfGuests(event.target.value)}
              inputProps={{
                name: 'number of guests',
                id: 'number-of-guests',
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </NativeSelect>
          </FormControl>
        </div>

        <div className="box-modal">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              className="date-range"
              localeText={{ start: 'Check-in', end: 'Check-out' }}
              onChange={handleCheckInOutDateChange}
            />
          </LocalizationProvider>

          <h2 className='detail-modal'>${props.apiData.pricePerNight} *  {diffDays} Nights    
             <span className='total-modal'>${props.apiData.pricePerNight * diffDays}</span></h2>



          <button onClick={submitButton} className="center">
            Reserve
          </button>
        </div>
      </div>
    </Box>
  );
}

export default BookingModal;
