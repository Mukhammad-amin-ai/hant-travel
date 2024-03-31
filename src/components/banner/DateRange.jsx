import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = ({ label = "From / To", style = "",dayCatcher }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    function calculateLengthOfDays(startDate, endDate) {
      var start = new Date(startDate).getTime();
      var end = new Date(endDate).getTime();

      var difference = Math.abs(end - start);

      var days = Math.ceil(difference / (1000 * 3600 * 24));

      return days;
    }
    function formatDate(dateString) {
      var date = new Date(dateString);

      var year = date.getFullYear();
      var month = String(date.getMonth() + 1).padStart(2, "0");
      var day = String(date.getDate()).padStart(2, "0");

      var formattedDate = year + "-" + month + "-" + day;

      return formattedDate;
    }

    var startDateF = formatDate(dates[0]);

    var endDateF = formatDate(dates[1]);

    var lengthOfDays = calculateLengthOfDays(startDateF, endDateF);

    dayCatcher(lengthOfDays);
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="searchbox-input">
      <label>{label}</label>
      <div className={`custom-select-dropdown ${style}`}>
        <div className="select-input">
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            dateFormat="MMM d"
            placeholderText="Select date range"
          />
          <i className="bi bi-chevron-down" />
        </div>
      </div>
    </div>
  );
};

export default DateRange;
