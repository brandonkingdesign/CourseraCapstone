import BookingForm from "../components/BookingForm";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="container" style={{ padding: "48px 0" }}>
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}




