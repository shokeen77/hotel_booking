import React, { useState, useEffect } from 'react';

const BookingHistory = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://hotel-booking-app-15006-default-rtdb.firebaseio.com/hotel.json'
        );
        const data = await response.json();

        const bookings = Object.keys(data).map((key) => {
          const booking = data[key];
          return {
            id: key,
            hotelName: booking.hotelName,
            hotelAddress: booking.hotelAddress,
            checkin: booking.checkin,
            checkout: booking.checkout,
            numberOfGuests: booking.numberOfGuests,
            price: booking.price,
          };
        });

        setTableData(bookings);
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteBooking = async (id) => {
    try {
      await fetch(`https://hotel-booking-app-15006-default-rtdb.firebaseio.com/hotel/${id}.json`, {
        method: 'DELETE',
      });

      const updatedTableData = tableData.filter((booking) => booking.id !== id);
      setTableData(updatedTableData);
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="booking-heading">Booking History</h2>
      <table>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Hotel Address</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Number Of Guests</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.hotelName}</td>
              <td>{booking.hotelAddress}</td>
              <td>{booking.checkin}</td>
              <td>{booking.checkout}</td>
              <td>{booking.numberOfGuests}</td>
              <td>{booking.price}</td>
              <td>
                <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
