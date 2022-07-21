import React, { useState } from "react";
import { connect } from "react-redux";
import { addBooking } from "../../actions/action";
import data from "../../data";
import "../Booking.css";
import AddBookingForm from "./AddBookingForm";
import checkRoomAvailability from "../checkRoomAvailability";

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

function AddBooking({ dispatch, bookings }) {
  const { rooms } = data;
  const surname = useFormInputs("");
  const roomBooked = useFormInputs(101);
  const bookingDate = useFormInputs(Date());

  const bookARoom = (e, roomInfo) => {
    console.log(bookings);
    e.preventDefault();
    if (checkRoomAvailability(bookings, roomInfo)) {
      dispatch(addBooking(roomInfo));
      alert(
        `Congratulation, ${roomInfo.surname}. Room No. ${roomInfo.roomBooked} booked successfully.`
      );
    } else {
      alert("Room not available. Please select other room or different date");
    }
  };
  return (
    <div className="addBooking">
      <p>ADD BOOKING</p>
      <hr className="divider" />
      <AddBookingForm
        bookARoom={bookARoom}
        rooms={rooms}
        surname={surname}
        bookingDate={bookingDate}
        roomBooked={roomBooked}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookings: state.bookings,
  };
};
export default connect(mapStateToProps)(AddBooking);
