import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import data from "../../data";
import "../Booking.css";
import checkRoomAvailability from "../checkRoomAvailability";
import CheckRoomForm from "./CheckRoomForm";
const useFormInputs = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
};

function CheckRoom({ dispatch, bookings }) {
  const { rooms } = data;
  const roomBooked = useFormInputs(101);
  const bookingDate = useFormInputs(Date());
  const [available, setAvailable] = useState(null);

  const checkRoom = (e, roomInfo) => {
    e.preventDefault();
    setAvailable(checkRoomAvailability(bookings, roomInfo) ? "yes" : "no");
  };
  return (
    <div className="checkBooking">
      <p>CHECK BOOKING</p>
      <hr className="divider" />
      <CheckRoomForm
        checkRoom={checkRoom}
        rooms={rooms}
        bookingDate={bookingDate}
        roomBooked={roomBooked}
        available={available}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    bookings: state.bookings,
  };
};
export default connect(mapStateToProps)(CheckRoom);
