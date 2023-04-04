import React from "react";
import { Row, Col, Divider } from "antd";
import './Footer.css'
import logo from '../../assets/images/EI.png';
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/images/LinkedIn.png";
import FaceBook from "../../assets/images/FB.png";
import Twitter from "../../assets/images/Twitter.png";
import Instagram from "../../assets/images/Instagram.png";


const Footer = () => {

    return (
        <>
            {/* <div className="footer">Footer</div> */}
            <div className='footer'>
                <div className="footer-cont">
                    <div style={{ paddingBottom: '30px' }} className='med'>
                        <Row className='footer-border'>
                            <Col md={2} className='ant-col-24'></Col>

                            <Col md={6} className='ant-col-24'>
                                <div style={{ paddingTop: '45px', }}>
                                    <img src={logo} alt='' width='100px' height='70px' />
                                    <div className='desc' style={{marginTop: "20px"}}>Emerging Inspection Est.(EI) provides wide 
                                                                                        range of Engineering and Technical Support for 
                                                                                        new and existing projects and service sectors.</div>
                                </div>
                            </Col>
                            <Col md={5} className='ant-col-24'></Col>
                            <Col md={11} className='ant-col-24'>
                                <div style={{ paddingTop: '45px', }} >
                                <Row>
                                    <Col md={4} className='ant-col-24'>
                                        <div style={{ marginTop: '17px' }}>
                                            <h3>Useful Links</h3>
                                            <br/>
                                            <p><Link to='/'>Home</Link></p>
                                            <p><Link to='/about'>About Us</Link></p>
                                            <p><Link to='/contact'>Contact Us</Link></p>
                                            <p><Link to='/'>Brochure</Link></p>
                                        </div>
                                    </Col>
                                    <Col md={3} className='ant-col-24'></Col>
                                    <Col md={10} className='ant-col-24'>
                                        <div style={{ marginTop: '18px' }}>
                                            <h3>Contact Us</h3>
                                            <br/>
                                            <Row>
                                                {/* <Col md={4}><img src={Phone} alt="" width="80%" /></Col> */}
                                                <Col md={20}><div><p style={{ fontSize: "15px" }}>+966547751138</p></div>
                                                             <div><p style={{ fontSize: "15px" }}>+966543995331</p></div> 
                                                </Col>
                                            </Row>
                                            <Row >
                                                {/* <Col md={4}><img src={Mail} alt="" width="80%" /></Col> */}
                                                <Col md={20}><p style={{ fontSize: "15px" }}>info@emerging-inspection.com</p></Col>
                                            </Row>
                                            <Row>
                                                {/* <Col md={4}><img src={Maps} alt="" width="80%" /></Col> */}
                                                <Col md={20}><div style={{ fontSize: "15px" }}>Building No. 7783, Prince Nayef Bin Abdulaziz Rd,</div>
                                                    <div style={{ fontSize: "15px" }}>Ghirnath Dist Postal Code- 32245,Dammam,</div>
                                                    <div style={{ fontSize: "15px" }}>Kingdom of Saudi Arabia</div></Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={1} className='ant-col-24'></Col>
                                </Row>
                                </div>
                            </Col>
                        </Row>
                        <div className="footer-border-bottom">
                            <Divider style={{ border: "solid 0.1px #61abef" }} />
                        </div>

                        <Row style={{ paddingTop: '2.2rem' }}>
                            <Col lg={2} md={2} className='ant-col-24'></Col>
                            <Col lg={5} md={4} className='ant-col-24'><p><Link to='https://www.arligtechnologies.com/'>© Arlig Technologies LLP, Inc. 2022</Link></p></Col>
                            <Col lg={8} md={6} className='ant-col-24'></Col>
                            <Col lg={8} md={10}>
                                <ul>
                                    <li><p>Follow us: </p></li>
                                    <li><div className='social-media'><a href="/" target="_blank"><img src={LinkedIn} alt="LinkedIn" width="90%"/></a></div></li>
                                    <li><div className='social-media'><a href="/" target="_blank"><img src={FaceBook} alt="Facebbok" width="90%"/></a></div></li>
                                    <li><div className='social-media'><a href="/" target="_blank"><img src={Twitter} alt="Facebbok" width="90%" /></a></div></li>
                                    <li><div className='social-media'><a href="/" target="_blank"><img src={Instagram} alt="Facebbok" width="90%"/></a></div></li>
                                </ul>
                            </Col>
                            <Col lg={1} md={2}></Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer