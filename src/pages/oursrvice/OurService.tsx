import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Benner from '../../Component/Benner';


const OurService = () => {
    return (
        <>
            <Benner
                title="Over Service"
                info="We are committed to a production consistent with the following value system"
            />
            <div className='OverServiceMainTitle'>
                <div className='container'>
                    <div className='d-flex align-items-center mainLinkBox'>
                        <div className='linkBox'>
                            <a href='#'> Home </a>
                        </div>
                        <span>
                            <img src='./img/icone/ChevronRight.png' />
                        </span>
                        <div className='linkBox'>
                            <a href='#' className='active'> Service </a>
                        </div>
                    </div>

                    <div className='mainOverServiceContent'>
                        <div>
                            <Row>
                                <Col lg={4}>
                                    <div>
                                        <div className='secDetailsContent'>
                                            <h3>OUR SERVICES</h3>
                                            <p>Web, App and Software Development Based</p>
                                            <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                                totam rem aperiam, eaque ipsa quae ab illo inventore.</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='overServiceImg'>
                                        <div className='OverserviceLayer'></div>
                                        <img src='./img/images/overserviceImg.png' />
                                        <div className='overServiceDetails'>
                                            <h3>Software testing</h3>
                                        </div>
                                        <div className='OverServiceHover'>
                                            <div className='OverServiceHoverTitle'>
                                                <h3>Software testing</h3>
                                            </div>
                                            <div className='HoverOverserviceDetails'>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                                </p>

                                                <span > Learn More </span>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className='overServiceImg'>
                                        <div className='OverserviceLayer'></div>
                                        <img src='./img/images/Overserviceimg1.png' />
                                        <div className='overServiceDetails'>
                                            <h3>WEB, APP & SOFTWARE
                                                DEVELOPMENT</h3>
                                        </div>
                                        <div className='OverServiceHover'>
                                            <div className='OverServiceHoverTitle'>
                                                <h3>WEB, APP & SOFTWARE
                                                    DEVELOPMENT</h3>
                                            </div>
                                            <div className='HoverOverserviceDetails'>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                                </p>

                                                <span > Learn More </span>

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <div className='overServiceSecRow'>
                                <Row>
                                    <Col lg={6}></Col>
                                    <Col lg={6}></Col>
                                    <Col lg={6}></Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}

export default OurService