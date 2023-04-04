import React from 'react';
import { Carousel, Row, Col} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import CarouselImg from '../../assets/images/Hero_Section_Image.jpg';
import NAVBAR from '../Navbar/navbar';
import FOOTER from '../Footer/Footer';
import './index.css';
import Image1 from "../../assets/images/Services 1.png";
import Image2 from "../../assets/images/Services 2.png";
import Image3 from "../../assets/images/Services 3.png";
import Image4 from "../../assets/images/Services 4.png";
import Image5 from "../../assets/images/Services 5.png";
import Image6 from "../../assets/images/Services 6.png";
import Image7 from "../../assets/images/Services 7.png";
import Image8 from "../../assets/images/Services 8.png";
import ClientLogo from "../../assets/images/EI.png";


const Homepage = () => {
    window.scrollTo(0, 0)
    const navigate = useNavigate();

    const settings = {
        autoplay: true,
        arrows: true,
        nextArrow: <span><i style={{ fontSize: "65px", color: "white" }} className="fas fa-angle-right carousel-icons"></i></span>,
        prevArrow: <span><i style={{ fontSize: "65px", color: "white" }} className="fas fa-angle-left carousel-icons"></i></span>,
    };
    return (
        <>

            <NAVBAR />
            <div className='home-page-main-container'>
                <Row>
                    {/* <Col md={4}><div style={{paddingTop: "200px", paddingLeft: "60px"}}><img src={Dots} alt="" /></div></Col> */}
                    <Col md={24}>
                        <Carousel {...settings}>
                            <div className='carousel-image'>
                                <img alt='' src={CarouselImg} width='100%' />
                                <div className="carousel-box-space">
                                    <div>
                                        <div className='carousel-box'>
                                            <h1 className='emerging-inspection-tag'>EMERGING <div className='inspectoin-margin'>INSPECTION</div></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-image'>
                                <img alt='' src={CarouselImg} width='100%' />
                                <div className="carousel-box-space">
                                    <div>
                                        <div className='carousel-box'>
                                            <h1 className='emerging-inspection-tag'>EMERGING <div className='inspectoin-margin'>INSPECTION</div></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-image'>
                                <img alt='' src={CarouselImg} width='100%' />
                                <div className="carousel-box-space">
                                    <div>
                                        <div className='carousel-box'>
                                            <h1 className='emerging-inspection-tag'>EMERGING <div className='inspectoin-margin'>INSPECTION</div></h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </div>
            
            <div>
                <div className='our-services-heading'>
                    <h1>OUR SERVICES</h1>
                    <h2>Everything You Need To Know About Our Services</h2>
                </div>

                <div className='our-services-content'>
                <Row style={{marginTop:"10px"}} gutter={[30 , 30]}>
                        <Col md={12}>
                            <div className='our-service-image'>
                            <img src={Image1} alt="Girl in a jacket" width="100%" height="100%" />
                            <div className='our-service-text'>
                                <p style={{padding: "5px 5px 0px 5px", }}>THIRD PARTY VENDOR</p>
                                <p style={{padding: "0px 5px 5px 5px", marginTop : "-7%" }}>INSPECTION</p>
                            </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                            <img src={Image2} alt="Girl in a jacket" width="100%" height="100%" />
                            <div className='our-service-text2'>
                                <p style={{padding: "5px 5px 0px 5px", }}>PROJECT INSPECTIONS &</p>
                                <p style={{padding: "0px 5px 5px 5px", marginTop : "-7%" }}>PROFESSIONAL</p>
                                <p style={{padding: "0px 5px 5px 5px", marginTop : "-7%" }}>MANPOWER SUPPLY</p>
                            </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='our-service-image'>
                            <img src={Image3} alt="Girl in a jacket" width="100%" height="100%" />
                            <div className='our-service-text'>
                                <p style={{padding: "5px 5px 0px 5px", }}>LIFTING </p>
                                <p style={{padding: "0px 5px 5px 5px", marginTop : "-7%" }}>INSPECTION</p>
                            </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                            <img src={Image4} alt="Girl in a jacket" width="100%" height="100%" />
                            <div className='our-service-text'>
                                <p style={{padding: "5px 5px 0px 5px", }}>PROJECT & DESK</p>
                                <p style={{padding: "0px 5px 5px 5px", marginTop : "-7%" }}>EXPEDITING</p>
                            </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='our-service-image'>
                            <img src={Image5} alt="Girl in a jacket" width="100%" height="100%" />
                            <div className='our-service-text'>
                                <p style={{padding: "5px 5px 0px 5px", }}>ENGINEERING</p>
                                <p style={{padding: "0px 5px 5px 5px", marginTop : "-7%" }}>CONSULATION</p>
                            </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                            <img src={Image6} alt="Girl in a jacket" width="100%" height="100%" />
                            <div className='our-service-text3'>
                                <p style={{padding: "5px 5px 0px 5px", }}>NDE SERVICES</p>
                            </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='our-service-image'>
                            <img src={Image7} alt="Girl in a jacket" width="100%" height="100%" />
                            <div className='our-service-text3'>
                                <p style={{padding: "5px 5px 0px 5px", }}>SCAFFOLDING</p>
                            </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                            <img src={Image8} alt="Girl in a jacket" width="100%" height="100%" />
                            <div className='our-service-text3'>
                                <p style={{padding: "5px 5px 0px 5px", }}>MAINTENANCE</p>
                            </div>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </div>

            <div className='our-client-full-div'>
                <div className='our-clients-heading'>
                    <h1>Our Clients</h1>
                    <h2>Some of our valuable Clients are...</h2>
                </div>
                <div className='our-clients-content'>
                    <Row gutter={[30, 30]}>
                        <Col md={6}>
                            <img src={ClientLogo} alt="Client Logo" width="80%"/>
                        </Col>
                        <Col md={6}>
                            <img src={ClientLogo} alt="Client Logo" width="80%"/>   
                        </Col>
                        <Col md={6}>
                            <img src={ClientLogo} alt="Client Logo" width="80%"/>
                        </Col>
                        <Col md={6}>
                            <img src={ClientLogo} alt="Client Logo" width="80%"/>
                        </Col>
                        <Col md={6}>
                            <img src={ClientLogo} alt="Client Logo" width="80%"/>
                        </Col>
                        <Col md={6}>
                            <img src={ClientLogo} alt="Client Logo" width="80%"/>   
                        </Col>
                        <Col md={6}>
                            <img src={ClientLogo} alt="Client Logo" width="80%"/>
                        </Col>
                        <Col md={6}>
                            <img src={ClientLogo} alt="Client Logo" width="80%"/>
                        </Col>
                    </Row>
                </div>
                <p style={{textAlign : 'center', fontSize: '18px'}}>30+ Companies</p>
            </div>

            <FOOTER />

        </>
    );

}
export default Homepage