import React from 'react'
import { Col, Row } from 'react-bootstrap'

function JobSection() {
    return (
        <div className='jobConversation position-relative'>
            {/* <div className='LayerBg'>
        <img src='./img/layerbg/' />
    </div> */}
            <div>
                <Row>
                    <Col lg={4} className="p-0">
                        <div className='position-relative HoverJobCard'>
                            <div className='JobConversationTitle'>
                                <h3> RECRUITMENT & SECONDMENT </h3>
                                <p>Worldwide we select the best
                                    IT professionals to complete your team.</p>
                            </div>
                            <div className='JobconversationInner'></div>
                            <img src='./img/images/bg1.svg' />
                        </div>
                    </Col>
                    <Col lg={4} className="p-0">
                        <div className='position-relative HoverJobCard'>
                            <div className='JobConversationTitle'>
                                <h3> RECRUITMENT & SECONDMENT </h3>
                                <p>Worldwide we select the best
                                    IT professionals to complete your team.</p>
                            </div>
                            <div className='JobconversationInner'></div>
                            <img src='./img/images/bg2.svg' />
                        </div>
                    </Col>
                    <Col lg={4} className="p-0">
                        <div className='position-relative HoverJobCard'>
                            <div className='JobConversationTitle'>
                                <h3> RECRUITMENT & SECONDMENT </h3>
                                <p>Worldwide we select the best
                                    IT professionals to complete your team.</p>
                            </div>
                            <div className='JobconversationInner'></div>
                            <img src='./img/images/bg3.svg' />
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default JobSection