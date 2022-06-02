import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'

const MainHomeCtnSection = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <div className='mainHomePageSlider'>
            <div className='container-fluid p-0'>
                <div className='position-relative mainHomeContent'>
                    <div className='LayerBg'>
                        <img src='./img/layerbg/Subtracttwo.png' className='layerbgimg' />
                        <img src='./img/layerbg/Subtract.png' className='layerbgimgtwo' />
                    </div>
                    <div className=''>
                        <Slider
                            asNavFor={nav2}
                            ref={(slider1: any) => setNav1((slider1))}
                            fade={true}
                        >
                            <div className='position-relative Sliderbg'>
                                <div className='bgimg'></div>
                                <img src="./img/sliderimg/home-1_slider-1_bg.jpg" alt='SliderOne' className='sliderbgimg' />
                                <Row className='SliderRow'>
                                    <Col lg={7}>
                                    </Col>
                                    <Col lg={5} className="px-lg-0 px-4">
                                        <div className='sliderInnerText'>
                                            <h3>Mobile Development</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                                            <button>
                                                GET IN TOUCH
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='position-relative Sliderbg'>
                                <div className='bgimg'></div>
                                <img src='./img/sliderimg/home-1_slider-2_bg.jpg' alt='SliderTwo' className='sliderbgimg' />
                                <Row className='SliderRow'>
                                    <Col lg={7}>
                                    </Col>
                                    <Col lg={5} className="px-lg-0 px-4">
                                        <div className='sliderInnerText'>
                                            <h3>Software Development</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                                            <button>
                                                GET IN TOUCH
                                            </button>
                                        </div>
                                    </Col>
                                </Row>

                            </div>

                            <div className='position-relative Sliderbg'>
                                <div className='bgimg'></div>
                                <img src="./img/sliderimg/home-1_slider-3_bg.jpg" alt='SliderThree' className='sliderbgimg' />
                                <Row className='SliderRow'>
                                    <Col lg={7}>
                                    </Col>
                                    <Col lg={5} className="px-lg-0 px-4">
                                        <div className='sliderInnerText'>
                                            <h3>Manage Your Infa</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                                            <button>
                                                GET IN TOUCH
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>



                        </Slider>
                    </div>


                </div>
            </div >

            <div className='position-absolute SliderTwo '>
                <div className='container'>
                    <div className='HomeMainSlider'>
                        <Slider
                            asNavFor={nav1}
                            ref={(slider2: any) => setNav2(slider2)}
                            slidesToShow={4}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            vertical={true}
                            verticalSwiping={true}
                        >
                            <div className='SliderInnerContent'>
                                <h3>Mobile Development</h3>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>
                            <div className='SliderInnerContent'>
                                <h3>Software Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>
                            <div className='SliderInnerContent'>
                                <h3>Manage Your Infa</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>
                            <div className='SliderInnerContent'>
                                <h3>Mobile Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>

                            <div className='SliderInnerContent'>
                                <h3>Software Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>
                            <div className='SliderInnerContent'>
                                <h3>Manage Your Infa</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>

                            <div className='SliderInnerContent'>
                                <h3>Mobile Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHomeCtnSection