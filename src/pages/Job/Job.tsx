import React, { useState } from 'react'
import Benner from '../../Component/Benner'
import { Col, Form, Row } from 'react-bootstrap';
import Pagination from "react-js-pagination"

interface noticeList {
    count: number;

}

const Job = () => {

    const [pageNo, setPageNo] = useState<number>(1)
    const [noticeData, setNoticeData] = useState<noticeList>({
        count: 0,
    });

    return (
        <>
            <Benner
                title='Create your career now'
                info='We are investing in training and professional growth of our employees. Become a part of our close knit community of passionate explorers'
            />

            <div className='CustomContainer'>
                <div className='ourjobMainBox'>
                    <div className='container'>
                        <div className='d-flex align-items-center mainLinkBox'>
                            <div className='linkBox'>
                                <a href='#'> Home </a>
                            </div>
                            <span>
                                <img src='./img/icone/ChevronRight.png' />
                            </span>
                            <div className='linkBox'>
                                <a href='#' className='active'> Jobs </a>
                            </div>
                        </div>

                        <div className='jobsNeedcard'>
                            <div className='xsContainer'>
                                <div>
                                    <Row>
                                        <Col md={6}>
                                            <div>
                                                <div className='jobcardbox'>
                                                    <img src='./img/images/job1.png' style={{ width: '100%', height: '323px' }} />
                                                    <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                    <div className='jobcardTitlebox'>
                                                        <div className='urgentlyNeeded'>
                                                            <p>Urgently Needed</p>
                                                        </div>
                                                        <div className='jobcardborder'>
                                                            <h1>Senior Java Developer</h1>
                                                            <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                                You will work for a leading company in the telecom industry with
                                                                You will work for a leading company in the telecom industry with
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <div className='mainlocationbox'>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Kyiv</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>Visa Support:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Long term</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>English Speaking:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center location'>
                                                                    <img src='./img/icone/map.png' />
                                                                    <h1>Freelance</h1>
                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>

                                            <div>
                                                <div className='jobcardbox'>
                                                    <img src='./img/images/job1.png' style={{ width: '100%', height: '323px' }} />
                                                    <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                    <div className='jobcardTitlebox'>
                                                        <div className='urgentlyNeeded'>
                                                            <p>Urgently Needed</p>
                                                        </div>
                                                        <div className='jobcardborder'>
                                                            <h1>Senior Java Developer</h1>
                                                            <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                                You will work for a leading company in the telecom industry with
                                                                You will work for a leading company in the telecom industry with
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <div className='mainlocationbox'>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Kyiv</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>Visa Support:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Long term</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>English Speaking:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center location'>
                                                                    <img src='./img/icone/map.png' />
                                                                    <h1>Freelance</h1>
                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div style={{ marginTop: '32px', marginBottom: '32px' }}>
                                    <Row>
                                        <Col md={6}>
                                            <div>
                                                <div className='jobcardbox'>
                                                    <img src='./img/images/job1.png' style={{ width: '100%', height: '323px' }} />
                                                    <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                    <div className='jobcardTitlebox'>
                                                        <div className='urgentlyNeeded'>
                                                            <p>Urgently Needed</p>
                                                        </div>
                                                        <div className='jobcardborder'>
                                                            <h1>Senior Java Developer</h1>
                                                            <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                                You will work for a leading company in the telecom industry with
                                                                You will work for a leading company in the telecom industry with
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <div className='mainlocationbox'>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Kyiv</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>Visa Support:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Long term</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>English Speaking:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center location'>
                                                                    <img src='./img/icone/map.png' />
                                                                    <h1>Freelance</h1>
                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>

                                            <div>
                                                <div className='jobcardbox'>
                                                    <img src='./img/images/job1.png' style={{ width: '100%', height: '323px' }} />
                                                    <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                    <div className='jobcardTitlebox'>
                                                        <div className='urgentlyNeeded'>
                                                            <p>Urgently Needed</p>
                                                        </div>
                                                        <div className='jobcardborder'>
                                                            <h1>Senior Java Developer</h1>
                                                            <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                                You will work for a leading company in the telecom industry with
                                                                You will work for a leading company in the telecom industry with
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <div className='mainlocationbox'>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Kyiv</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>Visa Support:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Long term</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>English Speaking:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center location'>
                                                                    <img src='./img/icone/map.png' />
                                                                    <h1>Freelance</h1>
                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div>
                                    <Row>
                                        <Col md={6}>
                                            <div>
                                                <div className='jobcardbox'>
                                                    <img src='./img/images/job1.png' style={{ width: '100%', height: '323px' }} />
                                                    <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                    <div className='jobcardTitlebox'>
                                                        <div className='urgentlyNeeded'>
                                                            <p>Urgently Needed</p>
                                                        </div>
                                                        <div className='jobcardborder'>
                                                            <h1>Senior Java Developer</h1>
                                                            <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                                You will work for a leading company in the telecom industry with
                                                                You will work for a leading company in the telecom industry with
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <div className='mainlocationbox'>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Kyiv</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>Visa Support:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Long term</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>English Speaking:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center location'>
                                                                    <img src='./img/icone/map.png' />
                                                                    <h1>Freelance</h1>
                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>

                                            <div>
                                                <div className='jobcardbox'>
                                                    <img src='./img/images/job1.png' style={{ width: '100%', height: '323px' }} />
                                                    <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                    <div className='jobcardTitlebox'>
                                                        <div className='urgentlyNeeded'>
                                                            <p>Urgently Needed</p>
                                                        </div>
                                                        <div className='jobcardborder'>
                                                            <h1>Senior Java Developer</h1>
                                                            <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                                You will work for a leading company in the telecom industry with
                                                                You will work for a leading company in the telecom industry with
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <div className='mainlocationbox'>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Kyiv</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>Visa Support:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                    <div className='d-flex align-items-center '>
                                                                        <img src='./img/icone/map.png' />
                                                                        <h1>Long term</h1>
                                                                    </div>

                                                                    <div className='d-flex align-items-center justify-content-between visa'>
                                                                        <h1>English Speaking:</h1>
                                                                        <p>Yes</p>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex align-items-center location'>
                                                                    <img src='./img/icone/map.png' />
                                                                    <h1>Freelance</h1>
                                                                </div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='extraSmallContainer'>
                                <div className='joblisting'>
                                    <h1>Jobs Listing</h1>
                                </div>

                                <div className='jobcollapseBox'>
                                    <div className='yourresume'>
                                        <div className='d-flex align-items-center justify-content-between job-collapse'>
                                            <h1>Your Resume</h1>
                                            <button
                                                className="btn btn-primary"
                                                data-toggle="collapse"
                                                data-target="#multiCollapseExample1"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="multiCollapseExample1"
                                            >
                                                <img src='./img/icone/chevron-up.png' />
                                            </button>
                                        </div>
                                        <div className='yourresumerow'>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                                        <div className="card card-body">
                                                            <ul>
                                                                <li>How to write the perfect resume</li>
                                                                <li>Tips & Tricks</li>
                                                                <li>Other</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='HireProcess'>
                                        <div className='d-flex align-items-center justify-content-between job-collapse'>
                                            <h1>Hire Process</h1>
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#multiCollapseExample2"
                                                aria-expanded="false"
                                                aria-controls="multiCollapseExample2"
                                            >
                                                <img src='./img/icone/chevron-up.png' />
                                            </button>
                                        </div>

                                        <div className="row">

                                            <div className="col">
                                                <div className="collapse multi-collapse" id="multiCollapseExample2">
                                                    <div className="card card-body">
                                                        <ul>
                                                            <li>Visa Candidadtes</li>
                                                            <li>Interview</li>
                                                            <li>Other</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='HireProcess'>
                                        <div className='d-flex align-items-center justify-content-between job-collapse'>
                                            <h1>What We Offer</h1>
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#multiCollapseExample3"
                                                aria-expanded="false"
                                                aria-controls="multiCollapseExample3"
                                            >
                                                <img src='./img/icone/chevron-up.png' />
                                            </button>
                                        </div>

                                        <div className="row">

                                            <div className="col">
                                                <div className="collapse multi-collapse" id="multiCollapseExample3">
                                                    <div className="card card-body">
                                                        <ul>
                                                            <li>Outstanding Service</li>
                                                            <li>Main Responsibilities</li>
                                                            <li>Other</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
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
                                </div>

                                <div className='seccontactUsBox'>
                                    <img src='./img/icone/briefcase.png' className='briefcase' />
                                    <div className='contactUsInner'>
                                        <h3>How can we help you?</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan</p>
                                        <button className='Contact d-flex align-items-center justify-content-center'>
                                            <img src='./img/icone/upload.png' />
                                            Upload Resume
                                        </button>
                                    </div>
                                </div>
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
                                    // <><img src="./img/doublePolygon.svg" /></>
                                }
                                lastPageText={
                                    // <><img src='./img/DublePolygonRight.svg' /></>
                                    <></>
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

export default Job