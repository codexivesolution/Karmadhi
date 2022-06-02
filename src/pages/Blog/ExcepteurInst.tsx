import React from 'react'
import Benner from '../../Component/Benner';
import { Col, Form, Row } from 'react-bootstrap';
import FloatingLabel from "react-bootstrap-floating-label";
import TextareaAutosize from 'react-textarea-autosize';
import Slider from "react-slick";

const ExcepteurInst = () => {



    return (
        <>
            <Benner
                title="Excepteur sint occaecat cupidatat non proident Suliem"
                info="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu"
            />

            <div className='excepteurinstmainctn'>
                <div className='container'>
                    <div className='d-flex align-items-center mainLinkBox'>
                        <div className='linkBox'>
                            <a href='#'> Home </a>
                        </div>
                        <span>
                            <img src='./img/icone/ChevronRight.png' />
                        </span>
                        <div className='linkBox'>
                            <a href='#'> Blog Posts </a>
                        </div>
                        <span>
                            <img src='./img/icone/ChevronRight.png' />
                        </span>
                        <div className='linkBox'>
                            <a href='#' className='active'> Excepteur sint occaecat </a>
                        </div>
                    </div>

                    <div className='excepteurinstDtailsSection'>
                        <div className='excepteurinstContent d-flex align-items-center justify-content-between'>
                            <div className='xsContainer'>
                                <div className='mainSocialbox d-flex align-items-center justify-content-between'>
                                    <div className='socialdate'>
                                        <h1>Posted 26 April 2021</h1>
                                    </div>
                                    <div className='d-flex align-items-center postingLinkmain'>
                                        <div className='postingLink'>
                                            <h1>Share Post:</h1>
                                        </div>
                                        <div className='PostingSocialmedia'>
                                            <img src='./img/icone/Facebook.png' />
                                            <img src='./img/icone/Linkedin1.png' />
                                            <img src='./img/icone/Instagram.png' />
                                            <img src='./img/icone/Twitter.png' />
                                            <img src='./img/icone/youtube.png' />
                                        </div>
                                    </div>
                                </div>

                                <div className='excepteurinsthasebox'>
                                    <div className='hasectn'>
                                        <p>#E-Learning</p>
                                    </div>
                                    <div className='hasectn'>
                                        <p>#Blockchain</p>
                                    </div>
                                    <div className='hasectn'>
                                        <p>#Fintech</p>
                                    </div>
                                    <div className='hasectn'>
                                        <p>#VirtualReality</p>
                                    </div>
                                    <div className='hasectn'>
                                        <p>#RecruitmentProcess</p>
                                    </div>
                                </div>

                                <div className='excepteurDetailstitle'>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                                </div>

                                <div className='excepteurtextBox'>
                                    <h1>Excepteur sint occaecat cupidatat non proident Suliem</h1>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                                    </p>
                                </div>

                                <div className='excepteurdotlink'>
                                    <h1>dolorem ipsum quia dolor sit amet</h1>
                                    <ul>
                                        <li>Sed quia consequuntur magni dolores eos qui</li>
                                        <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                                        <li>Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</li>
                                        <li>Voluptatem accusantium doloremque laudantium</li>
                                    </ul>
                                </div>

                                <div className='collExcepteurbox'>
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center justify-content-between" id="headingOne">
                                                <h5 className="mb-0">Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h5>
                                                <button
                                                    className="btn btn-link"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    <img src='./img/icone/plus.png' />
                                                </button>
                                            </div>

                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center justify-content-between" id="headingTwo">
                                                <h5 className="mb-0">Consectetur, adipisci velit, sed quia non numquam eius modi tempora</h5>
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <img src='./img/icone/plus.png' />
                                                </button>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header d-flex align-items-center justify-content-between" id="headingThree">
                                                <h5 className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h5>
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <img src='./img/icone/plus.png' />
                                                </button>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div className="card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='excepteurimgbox'>
                                    <img src='./img/images/excepteurimg.png' style={{ width: '100%', height: '300px', borderRadius: '12px' }} />
                                    <h1>Nemo enim ipsam voluptatem quia</h1>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                                </div>
                            </div>



                            <div className='extraSmallContainer'>
                                horizatal slider
                            </div>
                        </div>
                    </div>

                </div>

                <div className='taglinebox'>
                    <div>
                        <Row className='align-items-center'>
                            <Col lg={6}>
                                <div className='teglineText'>
                                    <h1>TAGLINE HERE</h1>
                                    <h2>At Codeimpact We Provide Many Software Development And Recruitment Services</h2>
                                    <p>We distinguish ourselves by using new technologies so that we can develop the perfect software.
                                        Also, recruitment is an essential part of our services. We are happy to help startups set up their product and market them.
                                        Because we are an IT company ourselves, we have a good view of the world of IT, and we can also match the right IT specialists
                                        in your company which can help you make your startup successful.</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='teglineMainImg'>
                                    <img src='./img/images/teglineimg.png' style={{ width: '100%', height: '422px', borderRadius: '12px', position: 'relative', zIndex: 3 }} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className='ourSpecialitiesbox'>
                    <h1 className='text-center'>OUR SPECIALTIES</h1>
                    <h2 className='text-center'>Nemo enim ipsam voluptatem quia voluptas</h2>

                    <div className='d-flex align-items-center justify-content-center mainCardbox'>
                        <div className='specialitiescard'>
                            <img src='./img/images/human-resources.png' />
                            <h2>RECRUITMENT</h2>
                            <p>We select IT professionals worldwide to strengthen your team</p>
                        </div>
                        <div className='specialitiescard'>
                            <img src='./img/images/app-development.png' />
                            <h2>WEB AND APP DEVELOPMENT</h2>
                            <p>Whether it concerns a mobile (android/ios) app, custom software, or a cloud solution, we are happy to put your product on the market</p>
                        </div>
                        <div className='specialitiescard'>
                            <img src='./img/images/domain.png' />
                            <h2>WEBSITE DEVELOPMENT</h2>
                            <p>A website with a content management system where you can easily manage the content of your site with packages such as Drupal, Typo3, or WordPress</p>
                        </div>
                        <div className='specialitiescard'>
                            <img src='./img/images/ecommerce.png' />
                            <h2>E-COMMERCE</h2>
                            <p>Web stores where you can sell your products, we mainly use Magento and Shopify to boost your sales</p>
                        </div>
                    </div>
                </div>

                <div className='ceoContent'>
                    <div className='bgimg'>
                        <div className='ceoCard'>
                            <img src='./img/images/heximg.png' className='hex' />
                            <p>Your <span>brand</span> is what other people say about you when you’re not in the room</p>
                            <h5>Robert K Davis . CEO Fundel</h5>
                        </div>
                    </div>

                    <div className='contectbox'>

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

export default ExcepteurInst