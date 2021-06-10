import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { START_DATE, END_DATE } from "react-dates/constants";


const DateFilter = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)

  return (
    <div>
      <DateRangePicker
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId={START_DATE} // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId={END_DATE} // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate)
          setEndDate(endDate)
        }} // PropTypes.func.isRequired,.
        isOutsideRange={(day) => day.isAfter(moment()) || day.isBefore(moment().subtract(5, 'year'))}
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusedInput( focusedInput )} // PropTypes.func.isRequired,
        daySize={30}
      />
    </div>
  );
};

export default DateFilter;
