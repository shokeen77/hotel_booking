


import NavBar from './component/NavBar';
import HotelCard from './component/HotelCard';
import ImageGrid from './component/ImageGrid';
import Form from './component/Form';
import BookingHistory from './component/BookingHistory';

import logo from './logo.svg';
import "./styles.css"
import { Card } from '@mui/material';


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>  
   {/* <HotelCard></HotelCard> */}
    <ImageGrid slug = "zion-kolob-canyon-farm-stay-cows-goats-alpaca"/>
     {/* <Form></Form>  */}
    {/* <BookingHistory></BookingHistory> */}
    </div>
   
  );
}

export default App;


//1 -- create the other component
