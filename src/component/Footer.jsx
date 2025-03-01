import React from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css"; 
import footer from "../img/Footer-img/Frame 721.png";
import img1 from "../img/Footer-img/1.png";
import img2 from "../img/Footer-img/2.png";
import img3 from "../img/Footer-img/3.png";
import img4 from "../img/Footer-img/4.png";
import img5 from "../img/Footer-img/5.png";

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row text-center text-md-start gap-3  ">
                    {/* Footer Links Section */}
                    <div className="col-lg-2 col-md-6 col-sm-6 mb-3 g-2  ">
                        <h5 className="fs-5 mt-3">Tailored Job Matches</h5>
                        <ul className="list-unstyled text-white-50 lh-lg">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Categories</li>
                            <li>Blogs</li>
                            <li>Contact Us</li>
                            <li>Dullat Pant</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 mb-3 g-2">
                        <h5 className="fs-5 mt-3">Job Seeker Section</h5>
                        <ul className="list-unstyled text-white-50 lh-lg">
                            <li>Browse Jobs</li>
                            <li>Upload Resume</li>
                            <li>Job Alerts</li>
                            <li>Career Tips</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 mb-3 g-2">
                        <h5 className="fs-5 mt-3">Employer Section</h5>
                        <ul className="list-unstyled text-white-50 lh-lg">
                            <li>Post a Job</li>
                            <li>Manage Jobs</li>
                            <li>Employer Dashboard</li>
                            <li>Pricing & Plans</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-3 g-2">
                        <h5 className="fs-5 mt-3">Support & Resources</h5>
                        <ul className="list-unstyled text-white-50 lh-lg">
                            <li>FAQs</li>
                            <li>Help Center</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Logo & Social Icons Section */}
                    <div className="col-lg-2 text-center mt-4 g-2">
                        <img src={footer} alt="HRIFY Jobs" className="footer-logo img-fluid mb-3" />
                        <div className="d-flex justify-content-center gap-3">
                            <img src={img1} alt="Facebook" className="logo img-fluid" style={{ width: "40px" }} />
                            <img src={img2} alt="Twitter" className="logo img-fluid" style={{ width: "40px" }} />
                            <img src={img3} alt="LinkedIn" className="logo img-fluid" style={{ width: "40px" }} />
                            <img src={img4} alt="Instagram" className="logo img-fluid" style={{ width: "40px" }} />
                            <img src={img5} alt="YouTube" className="logo img-fluid" style={{ width: "40px" }} />
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <div className="row mt-2 text-center">
                    <div className="col-12 text-start">
                        <p className="mb-0  text-white-50">&copy; 2025 HRIFY Jobs. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
