import React from 'react'

import { Link } from 'react-router-dom';

import blogheadimg from '../img/blogs-img/blogheadimg.png';

import Contactusimg from '../img/blogs-img/contactusimg.png';

import '../stylesheet/blogspage.css';

const Contactus = () => {
    return (
        <div>

            {/* Header Section */}

            <div className="container-fluid">
                <div className="row banner">
                    <div className="col-lg-12">
                        <div className="subscription-container">
                            <div className="content">
                                <h2>Your Career Starts Here!</h2>
                                <p>
                                    Find top jobs and talent in one place. Your career, your future—start now with HRIFY Jobs!
                                </p>

                                <div class="mt-4">
                                    <button class="btn btn-custom me-2">Explore Jobs</button>
                                    <button class="btn btn-custom">Post a Job</button>
                                </div>

                            </div>
                            <div className="image-container">
                                <img
                                    src={blogheadimg}
                                    alt="Career Insights"
                                    className="responsive-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* link navigate */}

            <div className="container  ">
                <div className="row ">

                    <div className="col-lg-12 mb-3 mt-3 ">


                        {/* <h6 className="nav-item  text-secondary"> <Link to={"/"} className='text-decoration-none'> Home</Link>  <span> <i class="fa-solid fa-greater-than  " style={{width:'10px'}}></i> </span> <Link to="/jobspage" className="text-decoration-none"> jobpage </Link>  <i class="fa-solid fa-greater-than  "></i> jobdetailspage </h6> */}

                        <h6 className="nav-item ">
                            <Link to={"/"} className="text-decoration-none text-secondary">Home</Link>
                            <span> <i className="fa-solid fa-greater-than" style={{ fontSize: "10px" }}></i> </span>

                            <span style={{ color: "#0080A7", fontWeight: "bold", fontSize: "16px" }}>Blogs</span>
                        </h6>



                    </div>

                </div>
            </div>


            {/*  */}



            <div className="container mb-4">
                <div className="row align-items-center">
                    {/* Contact Form */}
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-container">
                            <form>
                                <label>Full Name</label>
                                <input type="text" className="form-control" placeholder="Enter your full name" />

                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />

                                <label>Phone Number</label>
                                <input type="tel" className="form-control" placeholder="Enter your phone number" />

                                <label>Subject</label>
                                <select className="form-select">
                                    <option>Select Subject</option>
                                    <option>Job Inquiry</option>
                                    <option>Support</option>
                                    <option>General Question</option>
                                </select>

                                <label>Attachment Upload</label>
                                <input type="file" className="form-control" />

                                <label>Message</label>
                                <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>

                                <button type="submit" className="btn btn-submit mt-3">Submit</button>
                            </form>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-lg-6 col-md-12 text-center mt-4 mt-lg-0">
                        <img src={Contactusimg} alt="Business Professionals" className="contact-image" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contactus