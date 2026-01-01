/* global fetchAPI, submitAPI */

import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import BookingPage from "../pages/BookingPage";
import OrderPage from "../pages/OrderPage";
import LoginPage from "../pages/LoginPage";
import ConfirmedBooking from "../pages/ConfirmedBooking";



// 1) initializeTimes: initial available times for today's date
export function initializeTimes() {
  return fetchAPI(new Date());
}

// 2) updateTimes: reducer updates available times based on selected date
export function updateTimes(state, action) {
  return fetchAPI(new Date(action.date));
}

export default function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
