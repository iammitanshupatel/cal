import React from "react";
import { Calendar as ReactCalendar } from "react-calendar";

const Calendar = ({ value, handleChange }) => {
  const convertedValue = new Date(value.split("/").reverse().join("/"));

  return (
    <div>
      <h1 className="underline font-extrabold">{value}</h1>
      <ReactCalendar
        value={convertedValue}
        className={[
          "bg-green-950",
          "w-80",
          "max-w-full",
          "border-0",
          "font-mono",
          "leading-5",
          "text-green-200",
        ]}
      />
    </div>
  );
};

export default Calendar;
