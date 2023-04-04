import React from 'react';
import "./index.css";
import ContactUsImage from "../../assets/images/Contact-Us-Image.png";
import Navbar from "../Navbar/navbar";
import Footer from '../Footer/Footer';
import { Button, Form, Input, Row, Col } from 'antd';
import Phone from "../../assets/icons/Phone.svg";
import Mail from "../../assets/icons/Mail.svg";
import Maps from "../../assets/icons/Maps.svg";


// const onFinish = (values: any) => {
//     console.log('Success:', values);
// };

// const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
// };

const { TextArea } = Input;

const ContactUs = () => {
    return (
        <div>
            <Navbar />

            <div style={{ marginTop: "110px" }}>
                <div className='contact-us-image'>
                    <img src={ContactUsImage} alt="Contact us " width="100%" />
                </div>
                <div className='contact-us-heading'>
                    <h1>CONTACT US</h1>
                </div>
            </div>
            <div>
                <Row gutter={[30 , 30]}>
                    <Col md={2}></Col>
                    <Col md={10} style={{padding:"5%", marginTop:"5%"}}>
                        <h1>Enquire Form (or) Request Quote</h1>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            autoComplete="off"
                        >
                            <Form.Item name="firstname" rules={[{ required: true, message: 'Please input your First Name' }]}
                            >
                                <Input placeholder="First Name" />
                            </Form.Item>

                            <Form.Item name="emailaddress" rules={[{ required: true, message: 'Please input your Email Id' }]}
                            >
                                <Input placeholder="Email Address" />
                            </Form.Item>

                            <Form.Item name="contactnumber" rules={[{ required: true, message: 'Please input your Contact Number' }]}
                            >
                                <Input placeholder="Contact Number" />
                            </Form.Item>

                            <Form.Item>
                                <TextArea rows={4} placeholder="Enquire about your query or Request Quote for your requirement!" />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" danger htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={10}  style={{padding:"5%", marginTop:"5%"}}>
                        <Row>
                            <h1>Contact Us</h1>
                        </Row>
                        <Row style={{margin : "5% 5% 5% 0%"}}>
                            <Col md={4}><img src={Phone} alt="" width="70%"/></Col>
                            <Col md={20}><p style={{fontSize: "22px"}}>+966547751138</p><p style={{fontSize: "22px"}}>+966543995331</p></Col>
                        </Row>
                        <Row style={{margin : "5% 5% 5% 0%"}}>
                            <Col md={4}><img src={Mail} alt="" width="70%"/></Col>
                            <Col md={20}><p style={{fontSize: "22px"}}>info@emerging-inspection.com</p></Col>
                        </Row>
                        <Row style={{margin : "5% 5% 5% 0%"}}>
                            <Col md={4}><img src={Maps} alt="" width="70%"/></Col>
                            <Col md={20}><div style={{fontSize: "22px"}}>Building No. 7783, Prince Nayef Bin Abdulaziz Rd,</div>
                            <div style={{fontSize: "22px"}}>Ghirnath Dist Postal Code- 32245,Dammam,</div>
                            <div style={{fontSize: "22px"}}>Kingdom of Saudi Arabia</div></Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <Footer />

        </div>
    )
}

export default ContactUs
