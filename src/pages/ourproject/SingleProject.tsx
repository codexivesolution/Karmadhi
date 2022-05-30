import React from 'react'
import Slider from 'react-slick'
import Benner from '../../Component/Benner'
import { data } from './data'



const SingleProject = () => {


    const mainProjectSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    }


    return (
        <>
            <Benner
                title='Our Projects'
                info='Collection we are proud of'
            />

            <div className='CustomContainer'>
                <div className='singleprojectview'>
                    <div className='bglayer'></div>
                    <div className='container'>
                        <div className='d-flex align-items-center mainLinkBox'>
                            <div className='linkBox'>
                                <a href='#'> Home </a>
                            </div>
                            <span>
                                <img src='./img/icone/vectorwhite.png' />
                            </span>
                            <div className='linkBox'>
                                <a href='#' className=''> Projects </a>
                            </div>
                            <span>
                                <img src='./img/icone/vectorwhite.png' />
                            </span>
                            <div className='linkBox'>
                                <a href='#' className='active'> Virtual Reality Integration </a>
                            </div>
                        </div>

                        <div style={{ position: 'relative', zIndex: 50 }}>
                            <Slider {...mainProjectSlider}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='projectSlider'>
                                        <Slider
                                            autoplay
                                            autoplaySpeed={2000}
                                            dots={true}
                                            infinite
                                            arrows={false}
                                            initialSlide={1}
                                            customPaging={(i: any) => {
                                                return (
                                                    <div className='sliderdots'>
                                                        <img
                                                            src={data[i]}
                                                            alt=""
                                                            style={{ width: '100%', height: '195px', borderRadius: '12px', objectFit: 'cover' }} />
                                                    </div>
                                                )
                                            }}
                                        >
                                            {data.map((x: any) => (
                                                <div>
                                                    <img src={x} alt="" style={{ width: '100%', height: '444px', borderRadius: '12px' }} />
                                                </div>
                                            ))}
                                        </Slider>

                                    </div>

                                    <div className='sliderContentmain'>
                                        <div className='slidercontentdetails'>
                                            <div className='slidercontenttitle'>
                                                <div className='imgbox'>
                                                    <img src="./img/icone/singlesliderimg.png" alt="" />
                                                </div>
                                                <div className='titlebox'>
                                                    <h1>Virtual Reality Integration</h1>
                                                    <div className='labelbox'>
                                                        <div className='fintech'>
                                                            <p>Fintech</p>
                                                        </div>
                                                        <div className='smartcontract'>
                                                            <p>Smart Contract</p>
                                                        </div>
                                                        <div className='blockchain'>
                                                            <p>Blockchain</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='sliderdetailsbox'>
                                                <div className='sliderdetailstitle'>
                                                    <h1 className='titlename'>About The Project</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                                                </div>
                                                <div className='sliderdetailstitle'>
                                                    <h1 className='titlename'>The Challenge</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                                                </div>
                                                <div className='sliderdetailstitle'>
                                                    <h1 className='titlename'>The Solution</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                                                </div>

                                                <div className='slidernoticebox'>
                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                                                </div>

                                                <>
                                                    <div className='sliderdeveloperbox'>
                                                        <h1 className='developertitle'>Develop by</h1>
                                                        <div className='developerdeatilsbox'>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>

                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>

                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>

                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='developeruseingtech'>
                                                        <h1 className='tech'>Technologies used</h1>
                                                        <div className='techimgbox'>
                                                            <div>
                                                                <img src="./img/images/techimg1.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg2.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg3.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg4.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg5.png" alt="" />
                                                            </div>

                                                            <div>
                                                                <img src="./img/images/techimg1.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg2.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg3.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg4.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg5.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='collaborationbox'>
                                                        <h1 className='collaborationtitle'>In collaboration with</h1>
                                                        <div className='collaborationimg'>
                                                            <div>
                                                                <img src="./img/images/techimg1.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg2.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg3.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg4.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg5.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div className='projectSlider'>
                                        <Slider
                                            autoplay
                                            autoplaySpeed={2000}
                                            dots={true}
                                            infinite
                                            arrows={false}
                                            initialSlide={1}
                                            customPaging={(i: any) => {
                                                return (
                                                    <div className='sliderdots'>
                                                        <img
                                                            src={data[i]}
                                                            alt=""
                                                            style={{ width: '100%', height: '195px', borderRadius: '12px', objectFit: 'cover' }} />
                                                    </div>
                                                )
                                            }}
                                        >
                                            {data.map((x: any) => (
                                                <div>
                                                    <img src={x} alt="" style={{ width: '100%', height: '444px', borderRadius: '12px' }} />
                                                </div>
                                            ))}
                                        </Slider>

                                    </div>

                                    <div className='sliderContentmain'>
                                        <div className='slidercontentdetails'>
                                            <div className='slidercontenttitle'>
                                                <div className='imgbox'>
                                                    <img src="./img/icone/singlesliderimg.png" alt="" />
                                                </div>
                                                <div className='titlebox'>
                                                    <h1>Virtual Reality Integration</h1>
                                                    <div className='labelbox'>
                                                        <div className='fintech'>
                                                            <p>Fintech</p>
                                                        </div>
                                                        <div className='smartcontract'>
                                                            <p>Smart Contract</p>
                                                        </div>
                                                        <div className='blockchain'>
                                                            <p>Blockchain</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='sliderdetailsbox'>
                                                <div className='sliderdetailstitle'>
                                                    <h1 className='titlename'>About The Project</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                                                </div>
                                                <div className='sliderdetailstitle'>
                                                    <h1 className='titlename'>The Challenge</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                                                </div>
                                                <div className='sliderdetailstitle'>
                                                    <h1 className='titlename'>The Solution</h1>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                                                </div>

                                                <div className='slidernoticebox'>
                                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                                                </div>

                                                <>
                                                    <div className='sliderdeveloperbox'>
                                                        <h1 className='developertitle'>Develop by</h1>
                                                        <div className='developerdeatilsbox'>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>

                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>

                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>

                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                            <div className='developerbox'>
                                                                <div className='imgbox'>
                                                                    <img src="./img/images/developerimg.png" alt="" />
                                                                </div>
                                                                <div className='developertitlebox'>
                                                                    <h1 className='name'>Robert Kovic</h1>
                                                                    <p>Product Manager</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='developeruseingtech'>
                                                        <h1 className='tech'>Technologies used</h1>
                                                        <div className='techimgbox'>
                                                            <div>
                                                                <img src="./img/images/techimg1.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg2.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg3.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg4.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg5.png" alt="" />
                                                            </div>

                                                            <div>
                                                                <img src="./img/images/techimg1.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg2.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg3.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg4.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg5.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='collaborationbox'>
                                                        <h1 className='collaborationtitle'>In collaboration with</h1>
                                                        <div className='collaborationimg'>
                                                            <div>
                                                                <img src="./img/images/techimg1.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg2.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg3.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg4.png" alt="" />
                                                            </div>
                                                            <div>
                                                                <img src="./img/images/techimg5.png" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProject