import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRange = ({ label = "From / To", style = "",dayCatcher,Day }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    function calculateLengthOfDays(startDate, endDate) {
      let start = new Date(startDate).getTime();
      let end = new Date(endDate).getTime();

      let difference = Math.abs(end - start);

      let days = Math.ceil(difference / (1000 * 3600 * 24));

      return days;
    }
    function formatDate(dateString) {
      let date = new Date(dateString);

      let year = date.getFullYear();
      let month = String(date.getMonth() + 1).padStart(2, "0");
      let day = String(date.getDate()).padStart(2, "0");

      let formattedDate = year + "-" + month + "-" + day;

      return formattedDate;
    }

    let startDateF = formatDate(dates[0]);

    let endDateF = formatDate(dates[1]);

    let lengthOfDays = calculateLengthOfDays(startDateF, endDateF);

    dayCatcher(lengthOfDays);
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="searchbox-input">
      <label>{Day}</label>
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
