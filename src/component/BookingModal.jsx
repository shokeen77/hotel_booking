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
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

function BookingModal(props) {
  //   const [isModalOpen, setIsModalOpen] = useState(open);
  useEffect(() => {
    // console.log("hello world");
    console.log(props.pricePerNight);
  })
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
  const names = [

  ];

  const handleOnClick = (slug) => {

  }

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>

      <Box>
        <div className="booking-modal-container">
          <div className="booking-modal-content">
            <FormControl className='form-select'>
              <InputLabel id="demo-multiple-chip-label">Number of Guests</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"

                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box className="drop-down" >
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}

              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}

                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>



          {/********************  Date---------Picker *********************/}

          <div>
            <div className='box-modal'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
              </LocalizationProvider>
            </div>
          </div>
        </div>

      </Box>
    </>
  );
}

export default BookingModal;
