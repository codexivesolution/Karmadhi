import React from 'react'
import Slider from 'react-slick'

const UserSoftwareSection = () => {

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
    )
}

export default UserSoftwareSection