import React, { useState } from "react";
import styles from "./Calender.module.css";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Calender = ({dis}) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={styles.calendarHead} >
      <Calendar onChange={onChange} value={value} className={dis==='none'? styles.Calendar :styles.NoneCalendar }   />
    </div>
  );
};

export default Calender;
