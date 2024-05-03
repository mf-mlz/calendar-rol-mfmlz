import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

const Mycalendar = ({ events }) => {
  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      views={['month']}
      toolbar={false}
      style={{ height: 500, width: 800, backgroundColor: 'white' }}
    />
  );
};

export default Mycalendar;
