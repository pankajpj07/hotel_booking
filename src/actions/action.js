export const ADD_BOOKING = "ADD_BOOKING";
export const INITIAL_BOOKING = "INITIAL_BOOKING";

export function addBooking(payload) {
  return {
    type: ADD_BOOKING,
    payload,
  };
}

export function initialBooking(payload) {
  return {
    type: INITIAL_BOOKING,
    payload,
  };
}
