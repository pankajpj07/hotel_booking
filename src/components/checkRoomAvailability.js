export default function checkRoomAvailability(bookings, roomInfo) {
  let checkBookedRoomArray = [];
  checkBookedRoomArray = bookings.filter((room) => {
    return (
      room.roomBooked === roomInfo.roomBooked &&
      room.bookingDate === roomInfo.bookingDate
    );
  });
  console.log(checkBookedRoomArray);
  return checkBookedRoomArray.length === 0;
}
