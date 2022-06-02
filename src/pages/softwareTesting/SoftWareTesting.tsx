import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import Benner from '../../Component/Benner'

const SoftWareTesting = () => {

    const SoftwareSlider = {
        dots: false,
        fade: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    }


    return (
        <div>
            <Benner
                title="Web and App Development"
                info="We are committed to a production consistent with the following value system"
            />

            <div className='CustomContainer'>
                <div className='MainSoftWareTesting'>
                    <div className='container'>
                        <div className='d-flex align-items-center mainLinkBox'>
                            <div className='linkBox'>
                                <a href='#'> Home </a>
                            </div>
                            <span>
                                <img src='./img/icone/ChevronRight.png' />
                            </span>
                            <div className='linkBox'>
                                <a href='#'> Service </a>
                            </div>
                            <span>
                                <img src='./img/icone/ChevronRight.png' />
                            </span>
                            <div className='linkBox'>
                                <a href='#' className='active'> Software Testing </a>
                            </div>
                        </div>

                        <div className='mainSoftwareContent d-flex justify-content-between'>
                            <div className='smallContainer'>
                                <div className='SoftwaretestingContent'>
                                    <div className='softwareImgBox'>
                                        <div className='softwareLayer'></div>
                                        <img src='./img/images/Softwaremainimg.png' />
                                    </div>

                                    <div className='SoftwareDetailsCtn'>
                                        <h3>ADVANTAGES OF AUTOMATION</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                    </div>

                                    <div className='SoftwareDeteling'>
                                        <Row>
                                            <Col lg={6}>
                                                <div>
                                                    <div className='SoftwareDetailingText'>
                                                        <h3>SOFTWARE IS EVERYWHERE</h3>
                                                        <p>
                                                            These are just a few of the things we can do. Today, software is an indispensable part of society.
                                                            We can automate everything, and fewer and fewer personnel have to get deployed so that processes
                                                            can get carried out more efficiently and costs can get reduced.

                                                            <label>
                                                                Do you have questions, or would you like to know how we can make
                                                                your company more efficient with numerous software solutions? Please feel free to
                                                                contact us; visit our office, and we are happy to talk to you over a delicious cup of coffee or tea.
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className='d-flex align-items-center'>
                                                    <div>
                                                        <img src='' />
                                                    </div>
                                                    <div>
                                                        <img src='' />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>

                            <div className='contactUsBox'>
                                <img src='./img/images/headset.png' className='headset' />
                                <div className='contactUsInner'>
                                    <h3>How can we help you?</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan</p>
                                    <button className='Contact d-flex align-items-center justify-content-center'>
                                        <img src='./img/icone/phone-call.png' />
                                        Contact Us
                                    </button>
                                </div>
                                <div className='floatingBox'>
                                    <img src='./img/images/User.jpeg' />

                                    <div className='FloatingHover'>
                                        <div className='d-flex align-items-center justify-content-between floatingHoverInner'>
                                            <div>
                                                <h3>
                                                    Linda Kanne
                                                </h3>
                                                <p className='titleP'>Head of Talent</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <img src='./img/icone/linkedinBlack.png' className='Linkedinblack' />
                                                <img src='./img/icone/skypeblack.png' className='skypeblack' />
                                                <img src='./img/icone/TELEGRAM.png' className='Telegram' />
                                            </div>
                                        </div>
                                        <div className='hoverContactDetails d-flex align-items-center '>
                                            <img src='./img/icone/phone-call.png' style={{ width: '13px', height: '13px', borderRadius: '0px' }} />
                                            <p className='num'>+44 134 873 4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div>
                        <div className='SoftwareSliderContent'>
                            <div className='Softwaresliderlayer'></div>
                            <div className='SoftwareSliderInner'>
                                <div className='softwaresliderTitle text-center'>
                                    <h3 >USE CASE</h3>
                                    <p className='text-white'>Excepteur sint occaecat cupidatat non proident</p>
                                </div>

                                <div className='softwareSliderctnmain'>
                                    <Slider {...SoftwareSlider}>
                                        <div className='software-img'>
                                            <img src="./img/images/Software1.png" alt="" />
                                            <div className='hoverHidden'>
                                                <div className='bgleyer'></div>
                                                <div className='softwareSliderTitle'>
                                                    <h1>security Blockchain</h1>
                                                    <p>Ensure trust in Blockchain transactions</p>
                                                </div>
                                            </div>
                                            <div className='softwareHoverMain'>
                                                <div className='MiniHoverCtnbg'>
                                                    <h1>GPS TRACKER</h1>
                                                    <h2>Create a chip which track your gps location</h2>
                                                    <p>Create a chip which track your gps location and send it to a dashboard to see where your taxi's are.
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                                                    <a href="#">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='software-img'>
                                            <img src="./img/images/Software2.png" alt="" />
                                            <div className='hoverHidden'>
                                                <div className='bgleyer'></div>
                                                <div className='softwareSliderTitle'>
                                                    <h1>security Blockchain</h1>
                                                    <p>Ensure trust in Blockchain transactions</p>
                                                </div>
                                            </div>
                                            <div className='softwareHoverMain'>
                                                <div className='MiniHoverCtnbg'>
                                                    <h1>GPS TRACKER</h1>
                                                    <h2>Create a chip which track your gps location</h2>
                                                    <p>Create a chip which track your gps location and send it to a dashboard to see where your taxi's are.
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                                                    <a href="#">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='software-img'>
                                            <img src="./img/images/Software1.png" alt="" />
                                            <div className='hoverHidden'>
                                                <div className='bgleyer'></div>
                                                <div className='softwareSliderTitle'>
                                                    <h1>security Blockchain</h1>
                                                    <p>Ensure trust in Blockchain transactions</p>
                                                </div>
                                            </div>
                                            <div className='softwareHoverMain'>
                                                <div className='MiniHoverCtnbg'>
                                                    <h1>GPS TRACKER</h1>
                                                    <h2>Create a chip which track your gps location</h2>
                                                    <p>Create a chip which track your gps location and send it to a dashboard to see where your taxi's are.
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                                                    <a href="#">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='software-img'>
                                            <img src="./img/images/Software2.png" alt="" />
                                            <div className='hoverHidden'>
                                                <div className='bgleyer'></div>
                                                <div className='softwareSliderTitle'>
                                                    <h1>security Blockchain</h1>
                                                    <p>Ensure trust in Blockchain transactions</p>
                                                </div>
                                            </div>
                                            <div className='softwareHoverMain'>
                                                <div className='MiniHoverCtnbg'>
                                                    <h1>GPS TRACKER</h1>
                                                    <h2>Create a chip which track your gps location</h2>
                                                    <p>Create a chip which track your gps location and send it to a dashboard to see where your taxi's are.
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                                                    <a href="#">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='software-img'>
                                            <img src="./img/images/Software1.png" alt="" />
                                            <div className='hoverHidden'>
                                                <div className='bgleyer'></div>
                                                <div className='softwareSliderTitle'>
                                                    <h1>security Blockchain</h1>
                                                    <p>Ensure trust in Blockchain transactions</p>
                                                </div>
                                            </div>
                                            <div className='softwareHoverMain'>
                                                <div className='MiniHoverCtnbg'>
                                                    <h1>GPS TRACKER</h1>
                                                    <h2>Create a chip which track your gps location</h2>
                                                    <p>Create a chip which track your gps location and send it to a dashboard to see where your taxi's are.
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                                                    <a href="#">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='software-img'>
                                            <img src="./img/images/Software2.png" alt="" />
                                            <div className='hoverHidden'>
                                                <div className='bgleyer'></div>
                                                <div className='softwareSliderTitle'>
                                                    <h1>security Blockchain</h1>
                                                    <p>Ensure trust in Blockchain transactions</p>
                                                </div>
                                            </div>
                                            <div className='softwareHoverMain'>
                                                <div className='MiniHoverCtnbg'>
                                                    <h1>GPS TRACKER</h1>
                                                    <h2>Create a chip which track your gps location</h2>
                                                    <p>Create a chip which track your gps location and send it to a dashboard to see where your taxi's are.
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                                                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                                                    <a href="#">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SoftWareTesting