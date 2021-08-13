import React from 'react'
import { Container, Col, Carousel } from 'react-bootstrap'

function SignInUpPage() {

    const backdrops = [
        'https://image.tmdb.org/t/p/original/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg',
        'https://image.tmdb.org/t/p/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg',
        'https://image.tmdb.org/t/p/original/8s4h9friP6Ci3adRGahHARVd76E.jpg'
    ]
    return (
        <>
        <div>
            <Container>
<Col>
<Carousel >
                {backdrops.map(backdrop => (
                    <Carousel.Item style={{ height: '25rem' }}>
                        <img
                            className="d-block w-100"
                            src={backdrop}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
            </Carousel></Col>
<Col></Col>
            </Container>
        </div>
        </>
    )
}

export default SignInUpPage
