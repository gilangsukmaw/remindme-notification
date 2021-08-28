import React from 'react'
import Pin from '../../assets/images/Pin.png'
import './Home.scss'
import { Container, Col,} from 'react-bootstrap';


function HomeNotes() {
    
return (
<>
    {/* Background color nanti diganti dengan yg dari mapping */}
    <Container className='NotesCard text-dark' style={{backgroundColor: 'powderblue', marginBottom:'1rem'}}>
        <div className='CardTittle d-flex flex-row justify-content-between'>
            {/* Title diganti dari maping */}
            <p>Title: Understanding Business Value</p> <img src={Pin}></img>
        </div>

        <div className='NotesTime'>
            {/* tanggal diganti dari maping */}
            <p>11 Agustus 2021</p>
            <p>11:30-13:30</p>
        </div>
        
        <div className='MainNotes'>
            {/* Content diganti dari maping */}
            <p>As designer that understands how to continually bring value to the business while also advocating for
                the user is a golden egg for organizations.</p>
        </div>

    </Container>
   
    

</>
)
}

export default HomeNotes