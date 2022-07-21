import React from "react";
function AddBookingForm({
  bookARoom,
  surname,
  rooms,
  roomBooked,
  bookingDate,
}) {
  return (
    <form
      id="newBookingForm"
      action=""
      onSubmit={(e) =>
        bookARoom(e, {
          surname: surname.value,
          roomBooked: parseInt(roomBooked.value),
          bookingDate: bookingDate.value,
        })
      }
    >
      <div className="formContent">
        <div className="formRow">
          <label>Surname</label>
          <input type="text" placeholder="Surname" {...surname} required />
        </div>
        <div className="formRow">
          <label>Room</label>

          <select {...roomBooked} required>
            {rooms.map((room) => {
              return (
                <option key={room} value={room}>
                  {room}
                </option>
              );
            })}
          </select>
        </div>
        <div className="formRow">
          <label>Date</label>
          <input type="date" placeholder="Surname" {...bookingDate} required />
        </div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddBookingForm;
