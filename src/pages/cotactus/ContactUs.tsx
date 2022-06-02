import React from 'react'
import FloatingLabel from "react-bootstrap-floating-label";
import TextareaAutosize from 'react-textarea-autosize';
import { Col, Form, Row } from 'react-bootstrap';


const ContactUs = () => {
    return (
        <div className='CustomContainer'>
            <div className="contactBg">
                <div className='container'>
                    <div className='mainContactus d-flex '>
                        <div className='contactDetails'>

                            <>
                                <h1>CONTACT US</h1>
                                <h2>How can we help you?</h2>
                                <p>Feel free to ask any question - we are glad to help you!</p>
                            </>
                            <div>
                                <div className='FloatingLabelbox'>
                                    <FloatingLabel
                                        label="Name"
                                        className="floatingInput"
                                    >
                                        <Form.Control
                                            type="email" placeholder="name@example.com"
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        label="Your email address"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="Your email address"
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        label="Your phone number"
                                    >
                                        <Form.Control
                                            type="number"
                                            placeholder="Your phone number"
                                        />
                                    </FloatingLabel>

                                    <div className='serviceMsg'>
                                        <TextareaAutosize
                                            name=""
                                            placeholder="Your message"
                                            minRows={3}
                                            maxLength={400}
                                            style={{ width: '450px', height: '99px' }}
                                        />
                                    </div>

                                    <button> SEND MESSAGE </button>
                                </div>
                            </div>
                        </div>

                        <div className='OfficeLocationMain'>
                            <div className='locationtitle'>
                                <h1>OFFICE LOCATION</h1>
                                <h2>Our Headquarter</h2>
                            </div>
                            <div>
                                <Row className='align-items-center'>
                                    <Col md={6}>
                                        <div className='address'>
                                            <h1> India </h1>
                                            <div className='d-flex align-items-center map'>
                                                <img src='./img/icone/map.png' />
                                                <p> Teggert 140, 6367XR Voerendaal
                                                    Netherlands</p>
                                            </div>
                                            <div className='d-flex align-items-center phone'>
                                                <img src='./img/icone/phone-call.png' />
                                                <p>+31852250504</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <img src='./img/icone/email.png' />
                                                <p>karmadhi@gmail.in</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactUs