import HotelCard from './component/HotelCard';

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Form from './component/Form';
import NavBar from './component/NavBar';
import "./styles.css"

// import { Form } from 'react-bootstrap';

import ImageGrid from './component/ImageGrid';
import BookingHistory from './component/BookingHistory';
function App() {
  return (
    <div className="App">
      
      <NavBar></NavBar>
      {/* <HotelCard></HotelCard> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<HotelCard/>}></Route>
         
          <Route exact path='/bookinghistory'  element={<BookingHistory/>}> </Route>
        <Route exact path='/form' element = {<Form/>} ></Route>
      </Routes>
      </BrowserRouter>
     
   
     
 
     
      {/* <ImageGrid slug="Zion Kolob Canyon-Farm Stay-cows, goats, alpaca"></ImageGrid> */}
     </div>
   );
}

export default App;



