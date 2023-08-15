import React, { useState, useEffect } from 'react';
import Card from "./Card";
import { Box, Modal } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

function BookingModal(props) {
  const [checkin, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [numberofguests, setnumberOfGuests] = useState("");
  const [dateDifference, setDateDifference] = useState(0);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
      },
    },
  };
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(

      typeof value === 'string' ? value.split(',') : value,
    );
  };

     const details = JSON.stringify({
    hotelName: props.apiData.name,
    hotelAddress: props.apiData.address,
    numberOfGuests: numberofguests,
    price: props.apiData.pricePerNight
  })

  const submitButton = async () => {
    if (checkin && checkout) {
      const diffTime = Math.abs(checkin - checkout);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffTime + " milliseconds");
      console.log(diffDays + " days");
    }

    
    console.log("details", details);
    fetch(
      "https://hotel-booking-app-15006-default-rtdb.firebaseio.com/hotel.json",
      {
        method: "POST",
        body: details
      }
    )

  }

  return (
    <>

      <Box>
        <div className="booking-modal-container">
          <div className="booking-modal-content">
            <h2>${props.apiData.pricePerNight}/Night</h2>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Number of Guests
              </InputLabel>
              <NativeSelect
                defaultValue={0}
                inputProps={{
                  name: 'number of guests',
                  id: 'uncontrolled-native',
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



          {/********************  Date---------Picker *********************/}

          <div>

            <div className='box-modal'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker className='date-range' localeText={{ start: 'Check-in', end: 'Check-out' }} />
              </LocalizationProvider>
              <button onClick={submitButton} className='center'>Reserve</button>
            </div>
          </div>
        </div>

      </Box>
    </>
  );
}

export default BookingModal;
