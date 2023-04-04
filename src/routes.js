import React, { lazy, Suspense } from 'react';
import "./App.css"
import { LoadingOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Homepage = lazy(() => import("../src/components/Home_Page/homePage"));
const AboutUs = lazy(() => import("../src/components/Home_Page/AboutUs"));
const ContactUs = lazy(() => import("../src/components/Home_Page/ContactUs"));
const Services = lazy(() => import("../src/components/Home_Page/servicesPage"));

const webRoute = _ => (
    <>
        <Suspense fallback={<LoadingOutlined style={{ fontSize: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "20%" }} spin />}>
            <Router basename="">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/servicepage" element={<Services />} />
                </Routes>
            </Router>
        </Suspense>
    </>
);
export default webRoute