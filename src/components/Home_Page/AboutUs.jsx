import React from 'react';
import './index.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import {Row, Col} from 'antd';
import VisionImage from "../../assets/images/Our-Vision.png";
import OurMission from "../../assets/images/Our-Mission.png";
import OurValues from "../../assets/images/Our-Values.png";
import WhoWeImg1 from "../../assets/images/Who-we-are-1.png";
import WhoWeImg2 from "../../assets/images/Who-we-are-2.png";

const AboutUs = () => {
    return (
        <div>
            <Navbar />

            <div style={{marginTop:"115px"}}>
                <div className='about-us-heading'>
                    <h1>About Us</h1>
                </div>

                <div className='our-vision'>
                    <div className='our-vision-content'>
                        <Row>
                            <Col md={11}> <img src={VisionImage} alt="Vision" width="100%"/></Col>
                            <Col  md={2}></Col>
                            <Col md={11}>
                                <Row><h1>Our Vision</h1></Row>
                                <Row><p>To be a globally admired organization that enhances the
                                    quality life of all stake holders through sustainable industrial
                                    and business development.</p>
                                    <p>• Optimum utilization of resources</p>
                                    <p>• Sustainable environment friendly procedures and practices</p>
                                    <p>• The highest ethics and standards</p>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>


                <div className='our-mission'>
                    <div className='our-mission-content'>
                        <Row>
                            <Col md={11}>
                                <Row><h1>Our Mission</h1></Row>
                                <Row><p>We aspire to achieve business excellence through:</p>
                                    <p>• Optimum utilization of resources</p>
                                    <p>• Sustainable environment friendly procedures and practices</p>
                                    <p>• The highest ethics and standards</p>
                                    <p>• Hiring, developing and retaining the best people</p>
                                    <p>• Maximizing returns to stakeholders</p>
                                </Row>
                            </Col>
                            <Col  md={2}></Col>
                            <Col md={11}> <img src={OurMission} alt="Our Mission" width="100%" /></Col>
                        </Row>
                    </div>
                </div>

                <div className='our-values'>
                    <div className='our-values-content'>
                        <Row>
                            <Col md={11}> <img src={OurValues} alt="Our Values" width="100%" /></Col>
                            <Col  md={2}></Col>
                            <Col md={11}>
                                <Row><h1>Our Values</h1></Row>
                                <Row><p>Emerging Inspection is known for its values:</p>
                                    <div>
                                        <p>• Confidence</p>
                                        <p>• Compassion</p>
                                        <p>• Courage</p>
                                        <p>• Commitment</p>
                                        <p>• Safety</p>
                                    </div>

                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className='who-are-we'>
                    <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Who Are We</h1>
                    <Row>
                        <Col md={11}><img src={WhoWeImg1} alt="About Us" width="100%" /></Col>
                        <Col md={1}></Col>
                        <Col md={12}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                    </Row>

                    <div style={{ marginTop: "3%" }}>
                        <Row>
                            <Col md={12}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11} style={{ justifyContent: "right", borderRadius : "2px" }}><img src={WhoWeImg2} alt="About Us" width="100%" /></Col>
                        </Row>
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default AboutUs


