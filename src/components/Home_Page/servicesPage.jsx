import React from 'react';
import { Row, Col } from 'antd';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import "./index.css";
import Image1 from "../../assets/images/Services 1.png";
import Image2 from "../../assets/images/Services 2.png";
import Image3 from "../../assets/images/Services 3.png";
import Image4 from "../../assets/images/Services 4.png";
import Image5 from "../../assets/images/Services 5.png";
import Image6 from "../../assets/images/Services 6.png";
import Image7 from "../../assets/images/Services 7.png";
import Image8 from "../../assets/images/Services 8.png";

const servicesPage = () => {
    return (
        <div>
            <Navbar />

            <div className='our-services-page-container'> 
                <div className='our-services-page-heading'>
                    <h1 style={{ fontSize: "36px" }}>Our Services</h1>
                    <p>Everything you need to know about Our Services</p>
                    <div className='paragraph-padding'>
                        <p>Emerging Inspection Est. (EI) is quite manageable and committed to its services consisting of
                            all kinds of Industrial Support Services to all Industries (Oil & Gas Industries, Petrochemical Plants,
                            Gas Plants, Refineries, Support Industries, etc.) which are summarized as follows:</p>
                    </div>
                </div>
                <div className='our-services-content'>
                    <Row style={{ marginTop: "10px" }} gutter={[30, 30]}>
                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image1} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>VENDOR & PROJECT</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>INSPECTIONS</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image2} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>ENGINEERING</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>CONSULTANTS</p>
                                </div>
                            </div>
                        </Col>


                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image6} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text3'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>CIVIL WORKS</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image4} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text4'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>MAINTENANCE-</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>MECHANICAL, CIVIL,</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>ELECTRICAL &</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>INSTRUMENTATION</p>
                                </div>
                            </div>
                        </Col>


                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image5} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text3'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>FRP - GRP</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image6} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>FABRICATION, WELDING</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>& PAINTING</p>
                                </div>
                            </div>
                        </Col>


                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image7} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text3'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>SCAFFOLDING WORKS</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image8} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>EQUIPMENT RENTAL &</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>TRANSPOTATION</p>
                                </div>
                            </div>
                        </Col>


                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image7} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text3'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>IT SOLUTIONS</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image3} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text3'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>MANPOWER SUPPLIES</p>
                                </div>
                            </div>
                        </Col>


                        <Col md={6}></Col>
                        <Col md={12}>
                            <div className='our-service-image'>
                                <img src={Image8} alt="Girl in a jacket" width="100%" height="100%" />
                                <div className='our-service-page-text2'>
                                    <p style={{ padding: "5px 5px 0px 5px", }}>MATERIAL SUPPLIES</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>(INDUSTRIAL &</p>
                                    <p style={{ padding: "0px 5px 5px 5px", marginTop: "-7%" }}>CONSTRUCTION)</p>
                                </div>
                            </div></Col>
                        <Col md={6}></Col>
                    </Row>
                </div>


                {/* details starts */}
                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>VENDOR & PROJECT INSPECTIONS</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                <p>Emerging Inspection is an inspection company consisting of exceptional technical professional inspectors
                                    who are qualified engineers and are certified with major international certification bodies like API, ASME, TWI,
                                    BRITISH GAS etc.</p>
                                <p>Emerging Inspections is also Saudi Aramco approved and qualified agency. Inspections are performed inline with
                                    the international and locally recognized standards and specifications under the supervision of most qualified
                                    quality Inspector pertaining to specific commodities.certification bodies like API, ASME, TWI,BRITISH GAS etc.</p>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>THIRD PARTY VENDOR INSPECTIONS</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <p>Emerging Inspection is an ISO 9001:2015 certified Inspection company consisting of exceptional technical professional
                                        inspectors who are qualified engineers and are certified with major international certification bodies like
                                        API, ASME, TWI,BRITISH GAS etc.</p>
                                    <p>Emerging Inspections is also Saudi Aramco approved and qualified agency having its vendor registration since 2015.
                                        Inspections are performed inline with the international and locally recognized standards and specifications under
                                        the supervision of most qualified quality Inspector</p>
                                    <p>Our Inspection services includes and is not limited to below commodities</p>
                                </Row>
                                <Row>
                                    <Col md={10}>
                                        <p>• Pressure Vessel</p>
                                        <p>• Heat Exchangers</p>
                                        <p>• Storage Tanks</p>
                                        <p>• Pipes & Piping</p>
                                        <p>• Fitting</p>
                                        <p>• Pumps</p>
                                        <p>• Valves</p>
                                    </Col>
                                    <Col md={4}></Col>
                                    <Col md={10}>
                                        <p>• Skid Mounted Equipment’s</p>
                                        <p>• Coatings /Painting Inspection</p>
                                        <p>• Welding Inspections</p>
                                        <p>• Structural Steels</p>
                                        <p>• Cables</p>
                                        <p>• Switch Gears</p>
                                        <p>• Transformers</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>PROJECT AND FIELD EXPEDITING</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                <p>EI offers professional expediting services which has become key to seccess for the project completion with the
                                    deadlines and schedules becoming more and more critical. </p>
                                <p>Our expediters are experienced professionals who, by virtue of their technical backgrounds, are able to quickly
                                    verify progress against schedules, spot any potential bottlenecks and point out any quality issues that may lead to eventual delays.</p>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>NDE SERVICES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <p style={{ marginTop: "10px", letterSpacing: "1px" }}>Emerging Inspection is an approved third party ADVANCED NDT and NDE company in kingdom of Saudi Arabia. Advanced NDT and NDE
                                        (non destructive testing and evaluation) provides faster results, improves accuracy and saves your money. Emerging
                                        Inspections advanced NDT services use innovative technology to inspect and analyze anomalies in your equipment with fewer
                                        disruption to operations.</p>
                                    <p style={{ marginTop: "35px", letterSpacing: "1px" }}>These specialized applications speed up the inspection process and can often provide accurate results without interrupting your workflow.
                                        Our advanced NDT services help you reduce overall costs of inspection, decrease maintenance costs and ensure reliable operating processes.
                                        We provide a full spectrum of in-lab and callout advanced NDT/NDE services.</p>

                                </Row>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                        </Row>
                        <p>Some of the services namely are as below:</p>
                        <Row>
                            <Col md={1}></Col>

                            <Col md={10}>
                                <p>• Radiographic Testing</p>
                                <p>• Ultrasonic Testing</p>
                                <p>• Penetrant Testing</p>
                                <p>• Magnetic Particle Testing</p>
                                <p>• Alternating Current Field Measurement (ACFM)</p>
                                <p>• Automated Corrosion Mapping (ACM)</p>
                                <p>• Digital Radiography (DR) / Computed Radiography (CR)</p>
                                <p>• Eddy Current Array</p>
                                <p>• Eddy Current Testing (ET)</p>
                                <p>• Electromagnetic-acoustic transducers (EMAT) for boiler tube and piping</p>
                                <p>• Guided Wave Services</p>
                                <p>• Infrared Thermography</p>
                                <p>• IRIS Testing</p>
                                <p>• Close-range laser scanning for metrology and pipeline inspection</p>
                            </Col>
                            <Col md={3}></Col>
                            <Col md={10}>
                                <p>• Mid-range laser scanning for tanks and facilities</p>
                                <p>• Moisture Detection Imaging (MDI)</p>
                                <p>• Phased Array Ultrasonics (PAUT) with Full Matrix Capture (FMC)</p>
                                <p>• High Temperature PAUT (up to 700°F)</p>
                                <p>• Real Time Radiography (RTR)</p>
                                <p>• Remote Field Testing (RFT)</p>
                                <p>• Remotely Piloted Inspection Systems</p>
                                <p>• Time of Flight Diffraction (TOFD)</p>
                                <p>• Tube to Tube Sheet Weld Inspection</p>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>LIFTING INSPECTIONS</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                <p>The services that we provide both onshore and offshore locations comprise of witnessing, commissioning, and testing of
                                    lifting equipment, load testing of lifting equipment, periodic inspections and recertification of lifting tackles and equipment. </p>
                                <p>Our services not only assures the equipment is safe but also ensures that the equipment operators are well trained and highly skilled.</p>
                                <p>Inspection of lifting equipment's performed against international standards and specifications by highly expert, trained and certified
                                    quality professionals who are tested and certified by LEEA.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                            </Col>
                            <Col md={12}>
                                <Row>
                                    <p>Some of the inspections and activities are as below:</p>
                                </Row>
                                <Row>
                                    <Col md={14}>
                                        <h3>Material-handling Equipment’s:</h3>
                                        <p>• Cranes</p>
                                        <p>• Shackles</p>
                                        <p>• Hooks</p>
                                        <p>• Fork-Lifts</p>
                                        <p>• Derricks</p>
                                        <p>• Boom Trucks</p>
                                        <p>• Tower Crane</p>
                                        <p>• Truck Mounted Cranes</p>
                                        <p>• Elevating Platforms</p>
                                        <p>• Telehandlers</p>
                                    </Col>
                                    <Col md={10}>
                                        <h3>Man-handling Devices:</h3>
                                        <p>• Man Lifts</p>
                                        <p>• Elevators</p>
                                        <p>• Escalators</p>
                                        <p>• Cable cars etc</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>CIVIL SERVICES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={12}>
                                <p>Our Inspection services includes and is not limited to below commodities</p>
                                <Row>
                                    <Col md={11}>
                                        <p>• Industrial Flooring</p>
                                        <p>• Concrete repairs / Injection method</p>
                                        <p>• Cable Pulling & Installation</p>
                                        <p>• Asphalt Works</p>
                                        <p>• Water proofing</p>
                                        <p>• Supply & Installation of Fencing / Car Parking Shades</p>
                                        <p>• Trenching for pipes and cables</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• Excavation, backfilling & compaction services</p>
                                        <p>• Dewatering</p>
                                        <p>• Design & Construction of precast foundations.</p>
                                        <p>• Construction of road humps</p>
                                        <p>• Construction of concrete safety barriers</p>
                                        <p>• Safety signage & Thermoplastic road marking</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                        </Row>
                    </div>
                </div>


                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>MECHANICAL SERVICES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                <p>Our Inspection services includes and is not limited to below commodities</p>
                                <Row>
                                    <Col md={11}>
                                        <p>• Supply & installation of metallic structures.</p>
                                        <p>• Supply of ladders / platforms</p>
                                        <p>• Supply of rack supports for piping and tanks</p>
                                        <p>• Tanks / vessels</p>
                                        <p>• Supply of Metallic piping & installation</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• Hydrostatic pressure testing.</p>
                                        <p>• HVAC System (Chillers - AHU’s - FCU’s - Duct Works )</p>
                                        <p>• Irrigation System</p>
                                        <p>• Treatment System (Sewage & Water)</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>GRP/FRP/RTR/RTRP/GRE PIPES & FITTINGS SERVICES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <p>Emerging Inspection Est. (EI) supplies high quality GRP/FRP/RTR/RTRP/GRE Pipes & Fittings including Durable and 
                                        sustainable solution to lap joints. Supply of Materials that are customized and made to order as per specific requirements, 
                                        design parameters and drilling standard as to meet the customer needs and requirements.</p>
                                    <p>Our experienced team of engineers and technical support specialists assist customers in the early planning and design stages. 
                                        Our product experience ensure that our recommendation on product life cycle are accurate which allows the whole life cost 
                                        of a product to be calculated to a high degree of accuracy. From concept to commissioning, Silo tank's team of Engineers 
                                        provides the following services:</p>
                                </Row>
                                <Row style={{margin:"2%"}}>
                                    <p>• Needs Analysis & Front End Engineering Design (FEED)</p>
                                    <p>• Material Analysis and Corrosion Resistance</p>
                                    <p>• Asset & Industry Standard Compliance</p>
                                    <p>• AutoCAD & Solid works 3 D Modeling</p>
                                    <p>• CAPEX & Whole Life Cost Analysis</p>
                                    <p>• Structural Calculations</p>
                                    <p>• Process Guarantees</p>
                                    <p>• Solutions to the client..</p>
                                </Row>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>ELECTRICAL SERVICES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                <p>Our Inspection services includes and is not limited to below commodities</p>
                                <Row>
                                    <Col md={11}>
                                        <p>• Supply, installation and maintenance of electrical equipment</p>
                                        <p>• Underground cable routing in electrical conduits.</p>
                                        <p>• Supply & installation of panel board along with cable installation</p>
                                        <p>• Electrical Rewires</p>
                                        <p>• Electrification Works in Portacabins & Villas</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• General and periodic electrical inspections</p>
                                        <p>• Fire alarm systems</p>
                                        <p>• Heat pumps</p>
                                        <p>• Installation of switchgear and control systems</p>
                                        <p>• Underground cabling`</p>
                                        <p>• Data cabling installations</p>
                                        <p>• Uninterruptable Power Supply (UPS)</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>INSTRUMENTATION SERVICES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <p>Our Inspection services includes and is not limited to below commodities</p>
                                </Row>
                                <Row style={{margin:"2%"}}>
                                    <p>• Installation of Transmitters, Switches & Gauges for Pressure, 
                                        Temperature Flow and Level application, Control Valves, on / off valves, 
                                        Breather valves, Safety Valves, panels, junction boxes, cable laying & termination, 
                                        perforated cable tray work, pedestal fabrication</p>
                                    <p>• Installation of process installation, termination & commissioning of indicators, 
                                        transmitters and controllers & other field instruments</p>
                                    <p>• Installation including cabling, marshalling panels, instrument air / gas tubing and impulse piping</p>
                                    <p>• Ability to pre - fabricate instrument support</p>
                                    <p>• Instrumentation Construction Services</p>
                                    <p>• Instrument Installation (Field)</p>
                                    <p>• Instrument Calibration</p>
                                    <p>• Loop Test</p>
                                </Row>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>SCAFFOLDING SERVICES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                <Row>
                                    <p>We are a specialist scaffolding access provider to the industrial locations of Saudi Arabia. 
                                        We provide a multi-product approach to the provision of scaffolding to both new and existing
                                         plants, whether working on highly specialized industrial work or large commercial construction 
                                         projects, the division offers comprehensive solutions that include design, erection and 
                                         dismantling services. Regardless of the size or difficulty factor, our Scaffolding Services Division 
                                         has the resources and expertise to get the job completed on time.</p>
                                </Row>
                                <Row>
                                    <Col md={11}>
                                        <p>• New Plant Construction</p>
                                        <p>• Plant Maintenance</p>
                                        <p>• Plant Turnarounds</p>
                                        <p>• Commercial Construction</p>
                                        <p>• Power Projects</p>
                                        <p>• Infrastructure Projects</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• Building Refurbishment</p>
                                        <p>• Cement Production Plants</p>
                                        <p>• Steel Plants</p>
                                        <p>• Design Solutions</p>
                                        <p>• Scaffold Inspection Services</p>
                                        <p>• On-Site Supervisor Services</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>IT SERVICES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={12}>
                                <p>Our Inspection services includes and is not limited to below commodities</p>
                                <Row>
                                    <Col md={11}>
                                        <p>• Hardware System & Solutions</p>
                                        <p>• Security Solutions</p>
                                        <p>• NET Programming</p>
                                        <p>• Java Programming</p>
                                        <p>• IT Staffing & Support Services</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• CCTV Installations.</p>
                                        <p>• Software Solutions & Consulting</p>
                                        <p>• Telecommunications, Data Networks</p>
                                        <p>• Installation of Fiber Optic</p>
                                        <p>• Software Quality Assurance</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>MANPOWER SUPPLIES</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                <Row>
                                    <p>EI is providing various manpower for Long term, Short term and emergency Manpower Skilled & unskilled workers 
                                        (workers to managerial level)</p>
                                        <p>OUR SPECIALIZED MANPOWER</p>
                                </Row>
                                <Row>
                                    <Col md={11}>
                                        <p>• Engineers</p>
                                        <p>• Vendor Inspectors</p>
                                        <p>• Project Inspectors</p>
                                        <p>• Material Expeditor</p>
                                        <p>• QA/QC</p>
                                        <p>• E&I</p>
                                        <p>• Supervisor</p>
                                        <p>• Mechanical Fitters</p>
                                        <p>• Pipe Fitters</p>
                                        <p>• Pipe Fabricators</p>
                                        <p>• Fabricators</p>
                                        <p>• Surveyor</p>
                                        <p>• Camp Boss</p>
                                        <p>• Masonv</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• Electrician</p>
                                        <p>• Safety Officer</p>
                                        <p>• Steel Plants</p>
                                        <p>• Design Solutions</p>
                                        <p>• Scaffold Inspection Services</p>
                                        <p>• On-Site Supervisor Services</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>MATERIAL SUPPLYING-TRADING DIVISION</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={12}>
                                <p>Our Trading department is one of the best in the Kingdom of Saudi Arabia providing 
                                    services to the clients in various sector.</p>
                                    <p>
                                    OUR SPECIALIZED MATERIALS
                                    </p>
                                <Row>
                                    <Col md={11}>
                                        <p>• Electricals</p>
                                        <p>• Pipes & Fittings</p>
                                        <p>• Spare Parts</p>
                                        <p>• Pumps, Vessels, Gaskets Etc</p>
                                        <p>• Complete Safety Solutions-Wears, Fire Hazard, Signage, Barricades</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• Instrumentations</p>
                                        <p>• Rig Items</p>
                                        <p>• Valves & Flanges</p>
                                        <p>• Tools / Oils & Lubricants</p>
                                        <p>• Cables</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>EQUIPMENT RENTAL</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                <Row>
                                    <Col md={11}>
                                        <p>• Heavy lifting equipment</p>
                                        <p>• Experienced trained mechanics</p>
                                        <p>• Highly trained machine operator</p>
                                        <p>• Tower Lights</p>
                                        <p>• Vacuum Truck</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• Renting of operated earthmoving equipment</p>
                                        <p>• 24/7 reliable service</p>
                                        <p>• Generator-Electrical & Diesel</p>
                                        <p>• Boom Truck</p>
                                        <p>• Manlif</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div style={{ margin: "2% 5% 2% 5%" }}>
                    <div style={{ margin: "3% 0 2% 0" }}>
                        <h2 style={{ textAlign: "center" }}>TRANSPORTATION DIVISION</h2>
                    </div>
                    <div className='service-detail-text-size'>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={11}>
                                        <p>• Dump Truck</p>
                                        <p>• Flat Bed Trailers</p>
                                        <p>• Coaster</p>
                                        <p>• Hiace</p>
                                    </Col>
                                    <Col md={2}></Col>
                                    <Col md={11}>
                                        <p>• Low Bed Trailers</p>
                                        <p>• Pick UP</p>
                                        <p>• Dyna</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={11}><img src={Image1} alt="About Us" width="100%" /></Col>
                        </Row>
                    </div>
                </div>



            </div>

            <Footer />
        </div>
    )
}

export default servicesPage
