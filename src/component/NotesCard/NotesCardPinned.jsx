import React from 'react'
import './NotesCard.css'
import Pin from '../../img/Pin.png'

function NotesPinnedCard() {
return (
<>
    <div className='CardContainer text-dark '>
        <div className='CardTittle d-flex flex-row justify-content-between'>
            <p>Understanding Business Value</p> <img src={Pin}></img>
        </div>
        <div className='CardTanggal'>
            <p>11 Agustus 2021</p></div>
            <div className='MainNotes'>
                <p>As designer that understands how to continually bring value to the business while also advocating for
                    the user is a golden egg for organizations.</p>
            </div>
        
    </div>
</>
)
}

export default NotesPinnedCard