import React, { useState } from 'react'
import Benner from '../../Component/Benner'
import { Col, Form, Row } from 'react-bootstrap';
import Pagination from "react-js-pagination"


interface noticeList {
    count: number;

}

const OurProject = () => {

    const [pageNo, setPageNo] = useState<number>(1)
    const [noticeData, setNoticeData] = useState<noticeList>({
        count: 0,
    });

    return (
        <>
            <Benner
                title='Our Projects'
                info='Collection we are proud of'
            />

            <div className='CustomContainer'>
                <div className='OurProjectMain'>
                    <div className="container">
                        <div className='d-flex align-items-center mainLinkBox'>
                            <div className='linkBox'>
                                <a href='#'> Home </a>
                            </div>
                            <span>
                                <img src='./img/icone/ChevronRight.png' />
                            </span>
                            <div className='linkBox'>
                                <a href='#' className='active'> Projects </a>
                            </div>
                        </div>

                        <div className='ourprojectdetailsbox'>
                            <div className='maincardproject'>
                                <Row>
                                    <Col lg={6}>
                                        <div className='projectimg position-relative'>
                                            <div className='projectlayer'></div>
                                            <img src="./img/images/seniorjavaimg.png" alt="" className='project' />
                                            <div className='ourprojectdetails'>
                                                <h1>Smart Home Management</h1>
                                                <div className='d-flex align-items-center'>
                                                    <div className='cardlabel'>
                                                        <p>Fintech</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Smart Contract</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Blockchain</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='projectimg position-relative'>
                                            <div className='projectlayer'></div>
                                            <img src="./img/images/seniorjavaimg.png" alt="" className='project' />
                                            <div className='ourprojectdetails'>
                                                <h1>Smart Home Management</h1>
                                                <div className='d-flex align-items-center'>
                                                    <div className='cardlabel'>
                                                        <p>Fintech</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Smart Contract</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Blockchain</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className='maincardproject'>
                                <Row>
                                    <Col lg={6}>
                                        <div className='projectimg position-relative'>
                                            <div className='projectlayer'></div>
                                            <img src="./img/images/seniorjavaimg.png" alt="" className='project' />
                                            <div className='ourprojectdetails'>
                                                <h1>Smart Home Management</h1>
                                                <div className='d-flex align-items-center'>
                                                    <div className='cardlabel'>
                                                        <p>Fintech</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Smart Contract</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Blockchain</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='projectimg position-relative'>
                                            <div className='projectlayer'></div>
                                            <img src="./img/images/seniorjavaimg.png" alt="" className='project' />
                                            <div className='ourprojectdetails'>
                                                <h1>Smart Home Management</h1>
                                                <div className='d-flex align-items-center'>
                                                    <div className='cardlabel'>
                                                        <p>Fintech</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Smart Contract</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Blockchain</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className='maincardproject'>
                                <Row>
                                    <Col lg={6}>
                                        <div className='projectimg position-relative'>
                                            <div className='projectlayer'></div>
                                            <img src="./img/images/seniorjavaimg.png" alt="" className='project' />
                                            <div className='ourprojectdetails'>
                                                <h1>Smart Home Management</h1>
                                                <div className='d-flex align-items-center'>
                                                    <div className='cardlabel'>
                                                        <p>Fintech</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Smart Contract</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Blockchain</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='projectimg position-relative'>
                                            <div className='projectlayer'></div>
                                            <img src="./img/images/seniorjavaimg.png" alt="" className='project' />
                                            <div className='ourprojectdetails'>
                                                <h1>Smart Home Management</h1>
                                                <div className='d-flex align-items-center'>
                                                    <div className='cardlabel'>
                                                        <p>Fintech</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Smart Contract</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Blockchain</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className='maincardproject'>
                                <Row>
                                    <Col lg={6}>
                                        <div className='projectimg position-relative'>
                                            <div className='projectlayer'></div>
                                            <img src="./img/images/seniorjavaimg.png" alt="" className='project' />
                                            <div className='ourprojectdetails'>
                                                <h1>Smart Home Management</h1>
                                                <div className='d-flex align-items-center'>
                                                    <div className='cardlabel'>
                                                        <p>Fintech</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Smart Contract</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Blockchain</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='projectimg position-relative'>
                                            <div className='projectlayer'></div>
                                            <img src="./img/images/seniorjavaimg.png" alt="" className='project' />
                                            <div className='ourprojectdetails'>
                                                <h1>Smart Home Management</h1>
                                                <div className='d-flex align-items-center'>
                                                    <div className='cardlabel'>
                                                        <p>Fintech</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Smart Contract</p>
                                                    </div>
                                                    <div className='cardlabel'>
                                                        <p>Blockchain</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='jobPagination'>
                            <Pagination
                                itemClass="page-item-custom"
                                activeLinkClass="activepage"
                                linkClass="page-link-custom"
                                linkClassFirst="page-first-arrow"
                                linkClassPrev="page-first-arrow"
                                linkClassNext="page-first-arrow"
                                linkClassLast="page-first-arrow"
                                prevPageText={<div className='test'><img src='./img/icone/blackarrow.png' /></div>}
                                firstPageText={
                                    <div style={{ display: "none" }}></div>
                                }
                                lastPageText={
                                    <div style={{ display: "none" }}></div>
                                }
                                nextPageText={<div className='test'> <img src='./img/icone/blackarrow.png' className='secArrow' /> </div>}
                                activePage={pageNo}
                                itemsCountPerPage={10}
                                pageRangeDisplayed={10}
                                totalItemsCount={25}
                                onChange={(e) => {
                                    setPageNo(e);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurProject