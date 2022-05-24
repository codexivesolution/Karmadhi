import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TypeIndustry = () => {
    return (
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
    )
}

export default TypeIndustry