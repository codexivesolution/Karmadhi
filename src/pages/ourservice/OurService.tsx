import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Benner from '../../Component/Benner';
import Slider from 'react-slick';
import FloatingLabel from "react-bootstrap-floating-label";
import TextareaAutosize from 'react-textarea-autosize';

const OurService = () => {

    const OurService = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }



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
                                    <Col lg={4}>
                                        <div className='overServiceImg'>
                                            <div className='OverserviceLayer'></div>
                                            <img src='./img/images/CreateInfa.png' />
                                            <div className='overServiceDetails'>
                                                <h3>Create/manage <br />your infra</h3>
                                            </div>
                                            <div className='OverServiceHover'>
                                                <div className='OverServiceHoverTitle'>
                                                    <h3>Create/manage your infra</h3>
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
                                    <Col lg={4}>
                                        <div className='overServiceImg'>
                                            <div className='OverserviceLayer'></div>
                                            <img src='./img/images/Overserviceimg1.png' />
                                            <div className='overServiceDetails'>
                                                <h3>mobile development</h3>
                                            </div>
                                            <div className='OverServiceHover'>
                                                <div className='OverServiceHoverTitle'>
                                                    <h3>mobile development</h3>
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
                            </div>
                        </div>


                        <div className='container'>
                            <div className='OurServiceContentbox'>
                                <Row>
                                    <Col lg={6}>
                                        <div className='OurServiceSliderCtn'>
                                            <div className='NewTechTitleandContent'>
                                                <h3>VISION & MISSION</h3>
                                                <h2>Web, App and Software Development Based on New Technology</h2>
                                                <p>
                                                    Do you want to develop a website, a complete online store, app,
                                                    or tool effectively, and are you looking for an experienced party
                                                    that can help you in this? CodeImpact has qualified professionals
                                                    who are in state-of-the-art technologies to give a powerful
                                                    shape to your needs.
                                                    &nbsp;
                                                    <span>Read more...</span>
                                                </p>
                                                <button >Get in Touch</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='NewTechSlider'>
                                            <Slider {...OurService}>
                                                <div className='sliderContent'>
                                                    <div className='position-relative'>
                                                        <div className='imgLayer'></div>
                                                        <img src="./img/sliderimg/home-1_slider-3_bg.jpg" alt='SliderThree' />
                                                        <div className='NewPostHighLightContent'>
                                                            <p>26 April 2021</p>
                                                            <h2>Blog Posts Highlight</h2>
                                                            <p>Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='sliderContent'>
                                                    <div className='position-relative'>
                                                        <div className='imgLayer'></div>
                                                        <img src="./img/sliderimg/home-1_slider-1_bg.jpg" alt='SliderOne' />
                                                        <div className='NewPostHighLightContent'>
                                                            <p>26 April 2021</p>
                                                            <h2>Blog Posts Highlight</h2>
                                                            <p>Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='sliderContent'>
                                                    <div className='position-relative'>
                                                        <div className='imgLayer'></div>
                                                        <img src='./img/sliderimg/home-1_slider-2_bg.jpg' alt='SliderTwo' />
                                                        <div className='NewPostHighLightContent'>
                                                            <p>26 April 2021</p>
                                                            <h2>Blog Posts Highlight</h2>
                                                            <p>Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='OurServiceForm'>
                            <div className='container'>
                                <div className='mainFormContent'>
                                    <>
                                        <div className='serviceFormtitle'>
                                            <h3>GET IN TOUCH</h3>
                                            <p>Our professional will help you</p>
                                            <span>Feel free to ask any question - we are glad to help you!</span>
                                        </div>
                                        <div className='FloatingLabelbox'>
                                            <FloatingLabel
                                                // controlId="floatingInput"
                                                label="Name"
                                                className="floatingInput"
                                            >
                                                <Form.Control type="email" placeholder="name@example.com" />
                                            </FloatingLabel>
                                            <div className='d-flex align-items-center justify-content-between serviceNumber'>
                                                <FloatingLabel
                                                    // controlId="floatingPassword" 
                                                    label="Your email address"
                                                >
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Your email address"
                                                    />
                                                </FloatingLabel>
                                                <FloatingLabel
                                                    // controlId="floatingPassword" 
                                                    label="Your phone number"
                                                >
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="Your phone number"
                                                    />
                                                </FloatingLabel>
                                            </div>

                                            <div className='serviceMsg'>
                                                <TextareaAutosize
                                                    name=""
                                                    placeholder="Your message"
                                                    minRows={3}
                                                    maxLength={400}
                                                />
                                            </div>

                                            <button> SEND MESSAGE </button>
                                        </div>
                                    </>

                                    <div className='OurServiceUserContent'>
                                        <div className='UserLayer'></div>
                                        <img src='./img/images/OurUser.png' />
                                        <div className='mainUserContentDetails'>
                                            <div className='UserBack' id='UserId'>
                                                <img src='./img/images/user.jpeg' className='userImg' />
                                            </div>
                                            <div className='userTitle text-center'>
                                                <h3> Ravi Sondagar </h3>
                                                <p>Head of Business</p>
                                            </div>
                                            <div className='d-flex align-items-center userContact justify-content-between'>
                                                <div className='d-flex align-items-center'>
                                                    <img src="./img/icone/phone.png" className='phone' style={{ width: '16.01px', height: "15.99px", borderRadius: '0px' }} />
                                                    <p>+44 134 873 4</p>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <img src="./img/icone/envelope.png" className='email' style={{ width: '16px', height: "12px", borderRadius: '0px' }} />
                                                    <p>james.k@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className='borderCustom'></div>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <img src="./img/icone/linkedin.png" className='' style={{ width: '21px', height: "21px", borderRadius: '0px', marginRight: '12px' }} />
                                                <img src="./img/icone/skype.png" className='' style={{ width: '20.96px', height: "21px", borderRadius: '0px', marginLeft: '12px' }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </>


    )
}

export default OurService