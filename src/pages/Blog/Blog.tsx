import React, { useState } from 'react'
import Benner from '../../Component/Benner';
import { Col, Row } from 'react-bootstrap';
import ReadMore from "../../Component/ReadMore";
import Pagination from "react-js-pagination"


interface noticeList {
    count: number;

}


const Blog = () => {
    const [pageNo, setPageNo] = useState<number>(1)
    const [noticeData, setNoticeData] = useState<noticeList>({
        count: 0,
    });

    return (
        <>
            <Benner
                title="Blog Posts"
                info="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu"
            />

            <div className='mainBlogCtn'>
                <div className='container'>
                    <div className='d-flex align-items-center mainLinkBox'>
                        <div className='linkBox'>
                            <a href='#'> Home </a>
                        </div>
                        <span>
                            <img src='./img/icone/ChevronRight.png' />
                        </span>
                        <div className='linkBox'>
                            <a href='#' className='active'> Blog Posts </a>
                        </div>
                    </div>

                    <div className='bolgContentbox'>
                        <div>
                            <Row>
                                <Col md={6}>
                                    <div className='blogtextcontent'>
                                        <h1>26 April 2021</h1>
                                        <h2>Excepteur sint occaecat cupidatat non proident Suliem</h2>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                                        <a href="#">
                                            Read more
                                            <img src='./img/icone/right-arrow.png' style={{ marginLeft: '16px' }} />
                                        </a>
                                        <div className='d-flex align-items-center haseTagectn'>
                                            <div className='hasedetails' style={{ marginRight: '12px' }}>
                                                <span>
                                                    #E-Learning
                                                </span>
                                            </div>
                                            <div className='hasedetails'>
                                                <span>#Blockchain </span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div>
                                        <img src='./img/images/blog1.png' style={{ borderRadius: '12px', width: '100%', height: '440px' }} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

            <div className='MainBlogCardSection'>
                <div className="container">
                    <div>
                        <Row>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard1.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore children={
                                            `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo`
                                        } />


                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard2.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore children={
                                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                        } />


                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard3.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore children={
                                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                        } />


                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div style={{ marginTop: '50px' }} >
                        <Row>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard1.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore children={
                                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                        } />


                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard2.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore children={
                                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                        } />


                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard3.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore children={
                                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                        } />


                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div style={{ marginTop: '50px', marginBottom: '75px' }}>
                        <Row>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard1.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore
                                            children={
                                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                            }
                                        />
                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard2.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore children={
                                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                        } />


                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='mainCarddetails'>
                                    <img src='./img/images/blogcard3.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} />
                                    <div className='cardDetails'>
                                        <span>26 April 2021</span>
                                        <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                        <ReadMore children={
                                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                        } />


                                        <div className='cardHase'>
                                            <div className='cardLearning'>
                                                <p>#E-Learning</p>
                                            </div>
                                            <div className='cardblockchain'>
                                                <p>#Blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className='blogPagination'>
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
        </>
    )
}

export default Blog