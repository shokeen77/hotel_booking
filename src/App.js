


import NavBar from './component/NavBar';
import HotelCard from './component/HotelCard';
import "./styles.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import ImageGrid from './component/ImageGrid';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <HotelCard></HotelCard>
     <ImageGrid slug = "Zion Kolob Canyon-Farm Stay-cows, goats, alpaca"></ImageGrid>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;


//1 -- create the other component
