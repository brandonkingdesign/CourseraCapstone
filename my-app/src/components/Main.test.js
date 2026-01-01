describe("availableTimes reducer functions", () => {
  beforeEach(() => {
    const mockTimes = ["17:00", "18:00", "19:00"];

    // ✅ Define BEFORE importing Main
    window.fetchAPI = jest.fn(() => mockTimes);
  });

  test("initializeTimes returns non-empty array", () => {
    const { initializeTimes } = require("./Main");

    const times = initializeTimes();
    expect(times.length).toBeGreaterThan(0);
  });

  test("updateTimes returns available times for selected date", () => {
    const { updateTimes } = require("./Main");

    const state = [];
    const action = { date: "2023-10-10" };

    const times = updateTimes(state, action);
    expect(times.length).toBeGreaterThan(0);
  });
});
