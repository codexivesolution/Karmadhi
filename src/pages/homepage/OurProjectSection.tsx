import React from 'react'
import Slider from 'react-slick'

const OurProjectSection = () => {

    const ProjectSlider = {
        dots: false,
        fade: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };

    return (
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
    )
}

export default OurProjectSection