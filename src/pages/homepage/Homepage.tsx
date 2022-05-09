import { url } from 'inspector';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';

export default function App() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const [show, setShow] = useState(false)

    const clickShowProject = () => {
        setShow(!show)
    }

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const logoSlider = {
        dots: false,
        fade: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };

    const ProjectSlider = {
        dots: false,
        fade: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    const useSoftware = {
        dots: false,
        fade: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };

    return (
        <div className='CustomContainer'>
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

                            {/* <div className='bgimg'></div>
                                <img src="./img/sliderimg/home-1_slider-3_bg.jpg" alt='SliderThree' /> */}

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

            <div className='sliderLogo'>
                <div className='SliderLogoContent'>
                    <h3>Trust By Multinationals and Startups</h3>
                    <h2>Lorem ipsum dolor sit amet, consectetur</h2>
                    <div className='container'>
                        <div className='logoinnerSlider'>
                            <Slider {...logoSlider}>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/TLOGO-ORACLE.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-nodejs.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-redhat.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-postgresql.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-servicenow.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-ubuntu.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-vbnet.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-windowsserver.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-centos.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-java.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-microsoft-sql.png" />
                                </div>
                                <div className='sliderinnerImg'>
                                    <img src="./img/logo/Tlogo-debian.png" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>

            <div className='container'>
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
            </div>

            <div className='OurProjectContent'>
                <div className='projectLayer'></div>
                <div className='OurProjectInnerctn'>
                    <div className='ourProjectInnerTitle'>
                        <h3>Projects we are proud of</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Consectetur adipiscing elit, sed do eiusmod.</p>
                        <button>View all projects</button>
                    </div>

                    <div className='ProjectSliderBox'>
                        <Slider {...ProjectSlider}>

                            <div className='projectSliderImgbox'>
                                <div className='ProjectSliderLayer'></div>
                                <img src='./img/sliderimg/projectSlider1.svg' />

                                <div className='ourProjectSupporter'>
                                    <p>
                                        Projects
                                        <br />
                                        <span>PBC Support</span>
                                    </p>
                                </div>
                                <div className='projectOverlay'>
                                    <div className='overlayBg'>
                                        <div className='projectHover'>
                                            <h3>
                                                Projects
                                                <br />
                                                <span className='hoverProjecttitle'>University of Maastricht</span>
                                            </h3>
                                            <p>
                                                We have developed a separate module for the EPASS application for the University of Maastricht.
                                                This module makes it possible to create forms for students. Usability was an advantage, so users can simply...
                                            </p>
                                            <span className='hoverHase'>#E-Learning . #Database . #SQLServer</span>
                                            <div className='projectHoverBtn'>
                                                <button> View Project </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className='projectSliderImgbox'>
                                <div className='ProjectSliderLayer'></div>
                                <img src='./img/sliderimg/projectSlider2.svg' />

                                <div className='ourProjectSupporter'>
                                    <p>
                                        Projects
                                        <br />
                                        <span>PBC Support</span>
                                    </p>
                                </div>
                                <div className='projectOverlay'>
                                    <div className='overlayBg'>
                                        <div className='projectHover'>
                                            <h3>
                                                Projects
                                                <br />
                                                <span className='hoverProjecttitle'>University of Maastricht</span>
                                            </h3>
                                            <p>
                                                We have developed a separate module for the EPASS application for the University of Maastricht.
                                                This module makes it possible to create forms for students. Usability was an advantage, so users can simply...
                                            </p>
                                            <span className='hoverHase'>#E-Learning . #Database . #SQLServer</span>
                                            <div className='projectHoverBtn'>
                                                <button> View Project </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='projectSliderImgbox'>
                                <div className='ProjectSliderLayer'></div>
                                <img src='./img/sliderimg/projectSlider1.svg' />

                                <div className='ourProjectSupporter'>
                                    <p>
                                        Projects
                                        <br />
                                        <span>PBC Support</span>
                                    </p>
                                </div>
                                <div className='projectOverlay'>
                                    <div className='overlayBg'>
                                        <div className='projectHover'>
                                            <h3>
                                                Projects
                                                <br />
                                                <span className='hoverProjecttitle'>University of Maastricht</span>
                                            </h3>
                                            <p>
                                                We have developed a separate module for the EPASS application for the University of Maastricht.
                                                This module makes it possible to create forms for students. Usability was an advantage, so users can simply...
                                            </p>
                                            <span className='hoverHase'>#E-Learning . #Database . #SQLServer</span>
                                            <div className='projectHoverBtn'>
                                                <button> View Project </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='projectSliderImgbox'>
                                <div className='ProjectSliderLayer'></div>
                                <img src='./img/sliderimg/projectSlider2.svg' />

                                <div className='ourProjectSupporter'>
                                    <p>
                                        Projects
                                        <br />
                                        <span>PBC Support</span>
                                    </p>
                                </div>
                                <div className='projectOverlay'>
                                    <div className='overlayBg'>
                                        <div className='projectHover'>
                                            <h3>
                                                Projects
                                                <br />
                                                <span className='hoverProjecttitle'>University of Maastricht</span>
                                            </h3>
                                            <p>
                                                We have developed a separate module for the EPASS application for the University of Maastricht.
                                                This module makes it possible to create forms for students. Usability was an advantage, so users can simply...
                                            </p>
                                            <span className='hoverHase'>#E-Learning . #Database . #SQLServer</span>
                                            <div className='projectHoverBtn'>
                                                <button> View Project </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>

            <div className='typeIndustry'>
                <div className='TypeIdustryInner'>
                    <div className='container'>
                        <div className='TypeIndustryInnerContent'>
                            <h3>INDUSTRY</h3>
                            <div className='d-flex align-items-center justify-content-between viewContent'>
                                <p>With deep expertise across multiple key industries</p>
                                <button>
                                    View All
                                </button>
                            </div>

                            <div>
                                <Row>
                                    <Col lg={4} >
                                        <div className='industryGird'>
                                            <div className='IndustryEffectContent'>
                                                <div className='industryBg'></div>
                                                <img src='./img/GridImg/grid1.svg' />
                                                <div className='IndustryInnerEffect'>
                                                    <h2> E-Learning </h2>
                                                    <a href='#'>
                                                        <img src='./img/icone/ArrowRight.png' />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className='industryGird'>
                                            <div className='IndustryEffectContent'>
                                                <div className='industryBg'></div>
                                                <img src='./img/GridImg/grid2.svg' />
                                                <div className='IndustryInnerEffect'>
                                                    <h2>Telecom</h2>
                                                    <a href='#'>
                                                        <img src='./img/icone/ArrowRight.png' />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <div className='industryGird '>
                                            <img src='./img/GridImg/grid2.svg' />
                                        </div> */}
                                    </Col>
                                    <Col lg={4}>
                                        <div className='industryGird'>
                                            <div className='IndustryEffectContent'>
                                                <div className='industryBg'></div>
                                                <img src='./img/GridImg/grid6.svg' />
                                                <div className='IndustryInnerEffect'>
                                                    <h2>Ecommerce</h2>
                                                    <a href='#'>
                                                        <img src='./img/icone/ArrowRight.png' />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <div className='industryGird'>
                                            <img src='./img/GridImg/grid6.svg' />
                                        </div> */}
                                    </Col>
                                </Row>
                            </div>

                            <div className='IndustryRow'>
                                <Row>
                                    <Col lg={4}>
                                        <div className='industryGird'>
                                            <div className='IndustryEffectContent'>
                                                <div className='industryBg'></div>
                                                <img src='./img/GridImg/grid4.svg' />
                                                <div className='IndustryInnerEffect'>
                                                    <h2>Fintech</h2>
                                                    <a href='#'>
                                                        <img src='./img/icone/ArrowRight.png' />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <div className='industryGird'>
                                            <img src='./img/GridImg/grid4.svg' />
                                        </div> */}
                                    </Col>
                                    <Col lg={8}>
                                        <div className='industryGird'>
                                            <div className='IndustryEffectContent'>
                                                <div className='industryBg'></div>
                                                <img src='./img/GridImg/grid3.svg' />
                                                <div className='IndustryInnerEffect'>
                                                    <h2>Recruitment</h2>
                                                    <a href='#'>
                                                        <img src='./img/icone/ArrowRight.png' />
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <div className='industryGird'>
                                            <img src='./img/GridImg/grid3.svg' />
                                        </div> */}
                                        <div className='IndustryRow'>
                                            <Row>
                                                <Col lg={6}>
                                                    <div className='industryGird'>
                                                        <div className='IndustryEffectContent'>
                                                            <div className='industryBg'></div>
                                                            <img src="./img/GridImg/grid5.svg" />
                                                            <div className='IndustryInnerEffect'>
                                                                <h2>Gaming</h2>
                                                                <a href='#'>
                                                                    <img src='./img/icone/ArrowRight.png' />
                                                                </a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    {/* <div className='industryGird'>
                                                        <img src="./img/GridImg/grid5.svg" />
                                                    </div> */}
                                                </Col>
                                                <Col lg={6}>
                                                    <div className='industryGird'>
                                                        <div className='IndustryEffectContent'>
                                                            <div className='industryBg'></div>
                                                            <img src="./img/GridImg/grid7.svg" />
                                                            <div className='IndustryInnerEffect'>
                                                                <h2>Healthcare</h2>
                                                                <a href='#'>
                                                                    <img src='./img/icone/ArrowRight.png' />
                                                                </a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    {/* <div className='industryGird'>
                                                        <img src="./img/GridImg/grid7.svg" />
                                                    </div> */}
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='useSoftwareSlider'>
                <div className='useSoftwareInnerSlider'>
                    <Slider {...useSoftware}>
                        <div>
                            <img src='./img/sliderimg/SoftSlide1.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide2.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide3.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide4.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide5.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide6.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide1.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide2.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide3.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide4.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide5.svg' />
                        </div>
                        <div>
                            <img src='./img/sliderimg/SoftSlide6.svg' />
                        </div>
                    </Slider>
                </div>
            </div>

        </div >
    );
}
