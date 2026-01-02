import { useState, useEffect } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  
  // New state to track if the user has interacted with the guests field
  const [guestsTouched, setGuestsTouched] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  // Logic to determine if guest count is currently invalid
  const isGuestsInvalid = guests < 1 || guests > 10;

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(time)) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time]);

  const getIsFormValid = () => {
    return date !== "" && time !== "" && !isGuestsInvalid;
  };

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (getIsFormValid()) {
      submitForm({ date, time, guests, occasion });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        min={today}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

        <label htmlFor="guests">Number of guests</label>
        <div>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          onBlur={() => setGuestsTouched(true)} // Set touched on unfocus
          style={{ border: guestsTouched && isGuestsInvalid ? "2px solid red" : "" }}
        />
        {/* Conditional Error Message */}
        {guestsTouched && isGuestsInvalid && (
          <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
            Please enter between 1 and 10 guests.
          </p>
        )}
        </div>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input 
        type="submit" 
        value="Make Your reservation" 
        disabled={!getIsFormValid()}
        aria-label="On Click"
      />
    </form>
  );
}