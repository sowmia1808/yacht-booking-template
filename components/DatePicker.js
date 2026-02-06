"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingDatePicker({ date, setDate }) {
  return (
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      minDate={new Date()}
      className="border p-2 rounded w-full"
      placeholderText="Select booking date"
    />
  );
}
