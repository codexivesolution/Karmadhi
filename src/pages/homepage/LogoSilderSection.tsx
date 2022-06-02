import React from 'react'
import Slider from 'react-slick'

const LogoSilderSection = () => {

    const logoSlider = {
        dots: false,
        fade: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };

    return (
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
    )
}

export default LogoSilderSection