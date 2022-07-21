import { applyMiddleware, createStore } from "redux";
import bookingReducer from "./reducers";
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("Logger Middleware", action);
    next(action);
  };
const store = createStore(bookingReducer, applyMiddleware(logger));
export default store;
