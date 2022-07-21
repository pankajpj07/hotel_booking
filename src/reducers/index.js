import { ADD_BOOKING, INITIAL_BOOKING } from "../actions/action";

const initialBookingState = {
  bookings: [],
};

export default function bookingReducer(state = initialBookingState, action) {
  const { type, payload } = action;
  switch (type) {
    case INITIAL_BOOKING:
      return {
        ...state,
        bookings: payload,
      };
    case ADD_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, payload],
      };
    default:
      return state;
  }
}
