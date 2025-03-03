import React from 'react'
import { Link } from 'react-router-dom';

import '../stylesheet/blogspage.css';

import blogheadimg from '../img/blogs-img/blogheadimg.png';
import blogcard1 from '../img/blogs-img/blogcard1.png';
import blogcard2 from '../img/blogs-img/blogcard2.png';
import blogcard3 from '../img/blogs-img/blogcard3.png';
import blogcard4 from '../img/blogs-img/blogcard4.png';

import Jobspageclockicon from '../img/About-img/jobpageclock_icon.png'



const Blogspage = () => {
    return (
        <div>

            {/* Header Section */}

            <div className="container-fluid">
                <div className="row banner">
                    <div className="col-lg-12">
                        <div className="subscription-container">
                            <div className="content">
                                <h2>Stay Ahead in Your Career!</h2>
                                <p>
                                    Explore expert career tips, job market trends, and hiring
                                    insights to boost your professional journey.
                                </p>
                                <div className="subscription-form">
                                    <input className=' rounded-start-4' type="email" placeholder="Enter your email" />
                                    <button>Subscribe Now</button>
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



            {/* card section  */}

            <div class="container">

                <div class="row">

                    {/* <!-- Card 1 --> */}
                    <div class="col-lg-4 col-md-6 mb-4">

                       <div class="card shadow-sm h-100">
                            <img src={blogcard1} class="card-img-top w-100 " style={{ height: '200px', objectFit: 'cover', padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">How to Prepare for Virtual Interviews in 2025</h5>
                                <p class="card-text">Virtual interviews are the new normal. Learn essential tips to ace your next online interview and impress recruiters!</p>



                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>


                            </div>
                        </div>

                       

                    </div>


                    {/* <!-- Card 2 --> */}
                    <div class="col-lg-4 col-md-6 mb-4">
                        
                        <div class="card shadow-sm h-100">
                            <img src={blogcard4} class="card-img-top w-100 " style={{ height: '200px', objectFit: 'cover', padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">Top 10 High-Paying IT Jobs in 2025</h5>
                                <p class="card-text">The tech industry is booming! Discover the highest-paying IT jobs and the skills you need to land them.</p>


                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>


                            </div>
                        </div>

                       


                    </div>


                    {/* <!-- Card 3 --> */}
                    <div class="col-lg-4 col-md-6 mb-4">
                        
                        <div class="card shadow-sm h-100">
                            <img src={blogcard2} class="card-img-top w-100 " style={{ height: '200px', objectFit: 'cover', padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">Mastering LinkedIn: How to Build a Job-Winning Profile</h5>
                                <p class="card-text">Your LinkedIn profile is your online resume. Learn how to optimize it to attract top recruiters and job offers.</p>

                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>

                            </div>
                        </div>
                    </div>


                    {/* <!-- Card 4 --> */}
                    <div class="col-lg-4 col-md-6 mb-4 ">
                        <div class="card shadow-sm h-100">
                            <img src={blogcard3} class="card-img-top w-100 " style={{ height: '200px', objectFit: 'cover', padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">The Most Common Interview Questions & How to Answer Them</h5>
                                <p class="card-text">Be prepared! Here are the most frequently asked interview questions and expert tips on how to answer them confidently.</p>

                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Card 5 --> */}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow-sm h-100">
                            <img src={blogcard4} class="card-img-to w-60" style={{ padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">Career Growth: How to Get Promoted Faster in 2025</h5>
                                <p class="card-text">Want to climb the corporate ladder? Follow these proven strategies to accelerate your career growth.</p>

                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Card 6 --> */}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow-sm h-100">
                            <img src={blogcard2} class="card-img-top w-60 " style={{ padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">Freelancing vs. Full-Time Jobs: What’s Right for You?</h5>
                                <p class="card-text">Thinking of going freelance? Compare the pros and cons of freelancing and full-time jobs to make the best career decision.</p>

                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Card 7 --> */}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow-sm h-100">
                            <img src={blogcard1} class="card-img-top w-60 " style={{ padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">Effective Job Search Strategies to Land Your Dream Job</h5>
                                <p class="card-text">Applying to countless jobs with no response? Use these proven job search strategies to boost your chances of success.</p>

                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Card 8 --> */}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow-sm h-100">
                            <img src={blogcard4} class="card-img-top w-60 " style={{ padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">How to Write a Cover Letter That Gets You Hired</h5>
                                <p class="card-text">Your cover letter can make or break your application. Learn the secrets to writing a compelling cover letter that stands out.</p>

                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Card 9 --> */}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card shadow-sm h-100">
                            <img src={blogcard2} class="card-img-top w-60 " style={{ padding: '10px' }} alt="Interview Tips" />
                            <div class="card-body">
                                <h5 class="card-title">Top Skills Employers Are Looking for in 2025</h5>
                                <p class="card-text">Stay ahead of the competition! Find out the top skills that recruiters are prioritizing in 2025.</p>

                                <div className="d-flex  justify-content-between">

                                    <span className=' text-secondary'>
                                        <img src={Jobspageclockicon} style={{ width: "20px" }} alt="" /> February 5, 2025
                                    </span>

                                    < Link to={"/"} class=" readmore text-primary fw-bold text-decoration-none">Read More</Link>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default Blogspage