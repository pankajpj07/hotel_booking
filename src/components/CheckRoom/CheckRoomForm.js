import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
function CheckRoomForm({
  checkRoom,
  rooms,
  roomBooked,
  bookingDate,
  available = "",
}) {
  return (
    <form
      id="checkBookingForm"
      action=""
      onSubmit={(e) =>
        checkRoom(e, {
          roomBooked: parseInt(roomBooked.value),
          bookingDate: bookingDate.value,
        })
      }
    >
      <div className="formContent">
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
        <div className="formRow">
          <button type="submit">Check</button>
          <span>
            {!available ? (
              ""
            ) : available === "yes" ? (
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "green", fontSize: "35px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "red", fontSize: "35px" }}
              />
            )}
          </span>
        </div>
      </div>
    </form>
  );
}

export default CheckRoomForm;
