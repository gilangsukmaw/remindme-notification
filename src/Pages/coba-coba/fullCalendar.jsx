import React from 'react'
import Calendar from 'react-awesome-calendar';
import dayjs from 'dayjs';


function TesFullCalendar() {
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
const today = (dayjs.utc().add(1, 'day').local().format())
const events = [{
id: 1,
color: '#fd3153',
from: '2021-08-18T20:00:00+00:00',
to: '2021-08-18T20:00:00+00:00',
title: 'This is an event'
}, {
id: 2,
color: '#1ccb9e',
from: '2021-08-30T20:00:00+00:00',
to: '2021-08-31T20:00:00+00:00',
title: 'This is another event'
}, {
id: 3,
color: '#3694DF',
from: '2021-08-25T20:00:00+00:00',
to: '2021-08-25T20:00:00+00:00',
title: 'This is also another event'
},{
id: 6,
color: '#3694DF',
from: '2021-08-22T20:00:00+00:00',
to: '2021-08-22T20:00:00+00:00',
title: 'cek'
}];
return (
<>
    <div style={{maxWidth:'40rem', maxHeight:'20rem'}}>
        <h1>({today})</h1>
        {dayjs().format()}
        <Calendar events={events} />



    </div>
</>
)
}

export default TesFullCalendar