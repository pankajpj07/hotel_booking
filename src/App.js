import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AddBooking from "./components/AddBooking/AddBooking";
import CheckRoom from "./components/CheckRoom/CheckRoom";
import SideBar from "./components/SideBar/SideBar";
import { useEffect } from "react";
import { initialBooking } from "./actions/action";
import { connect } from "react-redux";
import data from "./data";

function App({ dispatch, bookings }) {
  console.log(bookings);
  useEffect(() => {
    dispatch(initialBooking(data.bookings));
  }, [data]);
  return (
    <div className="App">
      <Header />
      <main className="main-area">
        <aside className="sidebar">
          <SideBar />
        </aside>
        <aside className="main_components">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/add-booking" exact element={<AddBooking />} />
            <Route path="/check-room" exact element={<CheckRoom />} />
          </Routes>
        </aside>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookings: state.bookings,
  };
};

export default connect(mapStateToProps)(App);
