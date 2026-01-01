import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
    />
  );

  expect(screen.getByText(/choose date/i)).toBeInTheDocument();
});
