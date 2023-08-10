import React, { useState, useEffect } from 'react';

const BookingHistory = () => {
const [tableData, setTableData] = useState([]);
useEffect(() => {
  
    const data = [
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5" , "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5" , "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5" , "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5" , "Cell 5"],
      ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5" , "Cell 5"],
       ["Cell 1", "Cell 2", "Cell 3", "Cell 4", "Cell 5", "Cell 5"],
      
    ];
    setTableData(data);
  }, []);

  
  
  return (
    
    <div className="container">
         {/* <span className='border'><a href="#"> <div className='text-border'>A</div> </a> </span> */}
        <h2 className='booking-heading'>Booking History</h2>
      <table>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Hotel Address</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Number Of Guests </th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the tableData to render the rows */}
          {tableData.map((row, index) => (
            <tr key={index}>
              {/* Map through each row to render the cells */}
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
