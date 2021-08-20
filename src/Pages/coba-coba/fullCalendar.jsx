import React from 'react'
// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Calendar from 'react-awesome-calendar';
import dayjs from 'dayjs';

function TesFullCalendar() {
    var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
    const today = (dayjs.utc().add(1, 'day').local().format())
    const events = [{
        id: 1,
        color: '#fd3153',
        from: '2019-05-02T18:00:00+00:00',
        to: '2019-05-05T19:00:00+00:00',
        title: 'This is an event'
    }, {
        id: 2,
        color: '#1ccb9e',
        from: '2019-05-01T13:00:00+00:00',
        to: '2019-05-05T14:00:00+00:00',
        title: 'This is another event'
    }, {
        id: 3,
        color: '#3694DF',
        from: '2019-05-05T13:00:00+00:00',
        to: '2019-05-05T20:00:00+00:00',
        title: 'This is also another event'
    },{
        id: 6,
        color: '#3694DF',
        from: {today},
        to: '2021-08-10T20:00:00+00:00Z',
        title: 'cek'
    }];
    return (
        <>
        <div style={{maxWidth:'40rem', maxHeight:'20rem'}}>
<h1>({today}+Z)</h1>
        {dayjs().format()}
        <Calendar
                events={events}
            />


        {/* <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      /> */}
        </div>
        </>
    )
}

export default TesFullCalendar
