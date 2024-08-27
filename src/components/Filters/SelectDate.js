import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const SelectDate = ({ label, onDateChange }) => {
  const [date, setDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (newDate) {
      const formattedDate = format(newDate, 'MM-dd-yyyy');
      onDateChange(formattedDate);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        dateFormat="MM-dd-yyyy"
      />
    </div>
  );
};

export default SelectDate;
