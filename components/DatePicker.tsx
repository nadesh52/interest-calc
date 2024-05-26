import React from "react";

const DatePicker = ({ selectedValue }: any) => {
  return (
    <input
      type="date"
      autoComplete="off"
      required
      onChange={(e) => selectedValue(e)}
      className="bg-base border border-primary m-3 h-10 rounded-lg px-3 outline-none focus-visible:ring-1 focus-visible:border-secondary"
    />
  );
};

export default DatePicker;
