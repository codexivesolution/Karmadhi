import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'

const NewTechSection = () => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='NewtechContentbox'>
            <Row>
                <Col lg={6}>
                    <div className='NewTechInnerctn'>
                        <div className='NewTechTitleandContent'>
                            <h3>NEW TECH</h3>
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
                        <Slider {...settings}>
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
    )
}

export default NewTechSection