import React from 'react'
import './NotesCard.css'
import UnPin from '../../assets/images/UnPinned.png'
import { useState } from "react"
import { Button, } from 'react-bootstrap';



function NotesUnPinnedCard() {

return (
<>
    <div className='UnPinnedContainer text-dark' style={{backgroundColor: 'powderblue'}}>
        <div className='UnPinnedTittle d-flex flex-row justify-content-between'>
            {/* Title diganti dari maping */}
            <p>Understanding Business Value</p> <img src={UnPin}></img>
        </div>
        <div className='CardTanggal'>
            {/* tanggal diganti dari maping */}
            <p>11 Agustus 2021</p></div>
            <div className='MainNotes'>
            {/* Content diganti dari maping */}
                <p>As designer that understands how to continually bring value to the business while also advocating for
                    the user is a golden egg for organizations.</p>
            </div>
        
    </div>

    

</>
)
}

export default NotesUnPinnedCard