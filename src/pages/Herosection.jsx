import React from 'react'

import recimg from '../img/navimg/recruitment.png'
import fram1 from '../img/navimg/frameone.png'
import fram2 from '../img/navimg/frame2.png'
import fram3 from '../img/navimg/Frame3.png'
import fram4 from '../img/navimg/Frame4.png'



// tranding job  img

import t_c1 from '../img/navimg/rupee.png'
import t_c2 from '../img/navimg/tag.png'
import t_c3 from '../img/navimg/hospital.png'
import t_c4 from '../img/navimg/paint.png'
import t_c5 from '../img/navimg/employee.png'

import t_c6 from '../img/navimg/teach.png'
import t_c7 from '../img/navimg/hr.png'
import t_c8 from '../img/navimg/bpo.png'
import t_c9 from '../img/navimg/flage.png'
import t_c10 from '../img/navimg/shop.png'


// top loction
import chennaiing from '../img/navimg/chennaiimg.png'
import theni from '../img/navimg/theni.png'
import kanchipuram from '../img/navimg/kanchipuram.png'



import bag from '../img/navimg/bag.png'
import footertopimg from '../img/navimg/footerone.png'


import reg_candid from '../img/navimg/candidate.png'
import reg_emply from '../img/navimg/businessman.png'
import close from '../img/navimg/close.png'
import closeperson from '../img/navimg/closeuser.png'












const Herosection = ({ isvisible, setisvisible , isvisibleform ,setisvisibleform}) => {

    // show and hidden




    return (
        <div>







            {/* -------------------------------------------------------------------------------------------------------------------------- */}
            {/* user form hidden and visible function */}
            {
                isvisibleform ? (


                    <div class="container hidden_box d-flex align-items-center justify-content-center">
                        <div class="hidden_boder">
                            <div class="header d-flex align-items-center">
                                <button type="submit" class="hiddenlogin_btn"> Free Registration </button>
                                <button class="close_btn">
                                    <img src={close} alt="Close" onClick={()=>setisvisibleform(false)} />
                                </button>
                            </div>
                            <div class="row justify-content-center mt-4">
                                <div class="col-md-6 col-lg-5 box-one">
                                    <img src={reg_candid} alt="Candidate" />
                                    <h3 class="mt-2">CANDIDATE</h3>
                                    <button type="button" class="h_reg_btn">REGISTER NOW</button>
                                </div>
                                <div class="col-md-6 col-lg-5 box-one">
                                    <img src={reg_emply} alt="Employer" />
                                    <h3 class="mt-2 emp_btn">EMPLOYER</h3>
                                    <button type="button" class="h_reg_btn">REGISTER NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : null

            }




            {/* -------------------------------------------------------------------------------------------------------------------------- */}
            {/* user profile  hidden and visible function */}


            {
                isvisible ? (


                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-12 col-md-8 col-lg-6">
                                <div className="user_profile">
                                    <ul className="list-group text-center">

                                        <li className="list-group-item p-2 d-flex gap-5 home_closebtn align-items-center">
                                            <a className="text-decoration-none text-dark home_btn" href="#">Home</a>
                                            <img src={closeperson} onClick={()=> setisvisible(false)} className="user_closebtn ms-5 rounded-5 bg-dark" alt="" />
                                        </li>

                                        <li className="list-group-item p-2">
                                            <a className="text-decoration-none text-dark" href="#">Matching Jobs</a>
                                        </li>

                                        <li className="list-group-item p-2">
                                            <a className="text-decoration-none text-dark" href="#">Applied Jobs</a>
                                        </li>

                                        <li className="list-group-item p-2">
                                            <a className="text-decoration-none text-dark" href="#">Viewed Jobs</a>
                                        </li>

                                        <li className="list-group-item p-2">
                                            <a className="text-decoration-none text-dark" href="#">Packages</a>
                                        </li>

                                        <li className="list-group-item p-2">
                                            <a className="text-decoration-none text-dark" href="#">View Profile</a>
                                        </li>

                                        <li className="list-group-item p-2">
                                            <a className="text-decoration-none text-dark" href="#">Edit Profile</a>
                                        </li>

                                        <li className="list-group-item p-2">
                                            <a className="text-decoration-none text-danger" href="#">Logout</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                ) : null
            }












            {/* shadow section  */}

            <div className="container-fulid shadow_section  ">


                <div className="data_sec ">



                    <div className="row align-items-center text-center text-lg-start">
                        {/* Left Text Section */}
                        <div className="col-lg-6 mt-5">
                            <div className="herosectexr">
                                <span>Discover Opportunities</span> <br />
                                <span>Land Your <span className='herosectexr-inpara'> Dream Job</span> </span> <br />
                                <span>and Build Great Teams!</span> <br />
                                <span className='herosectexr_para'>Find the perfect opportunity tailored to your skills</span>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="col-lg-6 mt-5">
                            <img src={recimg} alt="Recruitment" className='img-fluid herosectexr_img' />
                        </div>
                    </div>




                    {/* drobdown section */}


                    <div className="container-fluid dropdown_width d-flex align-items-center justify-content-center">
                        <div className="row justify-content-center w-90 ">
                            <div className="col-12">

                                <div className="d-flex flex-wrap gap-3 p-3 border border-2 rounded-3 justify-content-evenly shadow-sm bg-light w-100">

                                    {/* Dropdown - Categories */}
                                    <select className="form-select w-auto px-5 py-2 border-2" aria-label="Select Categories">
                                        <option selected> Select Categories </option>
                                        <option value="1">IT Jobs</option>
                                        <option value="2">Engineering</option>
                                        <option value="3">Healthcare</option>
                                    </select>

                                    {/* Dropdown - Job Title */}
                                    <select className="form-select w-auto px-5 py-2 border-2" aria-label="Select Job Title">
                                        <option selected>Select Job Title</option>
                                        <option value="1">Software Engineer</option>
                                        <option value="2">Mechanic</option>
                                        <option value="3">Sales Executive</option>
                                    </select>

                                    {/* Dropdown - District */}
                                    <select className="form-select w-auto px-5 py-2 border-2" aria-label="Select District">
                                        <option selected>Select District</option>
                                        <option value="1">New York</option>
                                        <option value="2">Los Angeles</option>
                                        <option value="3">Chicago</option>
                                    </select>

                                    {/* Dropdown - Location */}
                                    <select className="form-select w-auto px-5 py-2 border-2" aria-label="Select Location">
                                        <option selected>Select Location </option>
                                        <option value="1">Downtown</option>
                                        <option value="2">Suburban</option>
                                        <option value="3">Remote</option>
                                    </select>

                                    {/* Search Button */}

                                    <button type="button" className="px-4 dropdown-btn w-auto w-md-100">
                                        <i className="fa-solid fa-magnifying-glass me-2 ms-2"></i>Search
                                    </button>


                                </div>

                            </div>
                        </div>
                    </div>




                    {/* register btn */}


                    <div className="row mt-4 ">
                        <div className="col-12 text-center">
                            <button type="button" className="p-2 reg_btn">Register Now</button>
                        </div>
                    </div>




                </div>







            </div>



            {/* Our Latest Jobs */}


            <div className="container ">

                {/* <h2 className="text-center fw-bold mb-4">Our Latest Jobs</h2> */}
                <div class="text-container mt-3 mb-4 ">
                    <div class="line"></div>
                    <div class="text ">Our Latest Jobs</div>
                    <div class="line"></div>
                </div>


                <div className="row justify-content-center g-4">

                    {/* maping data  */}
                    {[...Array(6)].map(() => (

                        <div className="col-lg-4 col-md-6" >
                            <div className="card shadow border-0 rounded-3">
                                {/* Header */}


                                <div className="text-white job_header py-2 fs-5 fw-bold d-flex align-items-center">
                                    <span className="job_headerlogo">Company Logo</span>


                                </div>

                                {/* <img className='jobheart' src={jobheart} alt="" /> */}

                                <h5 className='jobheart'> <i class="fa-regular fa-heart "></i></h5>

                                {/* Card Body */}
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li className="d-flex mb-2">
                                            <h6 className="me-5 fw-bold">Job:</h6>
                                            <span className="ms-5 text-muted">Heavy Vehicle Mechanic </span>
                                        </li>

                                        <li className="d-flex mb-2">
                                            <h6 className="me-5 fw-bold">Company:</h6>
                                            <span className="text-muted">Tyre Shop</span>
                                        </li>

                                        <li className="d-flex mb-2">
                                            <h6 className="me-5 fw-bold">Gender:</h6>
                                            <span className=" ms-3 text-muted">Male</span>
                                        </li>

                                        <li className="d-flex mb-2">
                                            <h6 className="me-5 fw-bold">Address:</h6>
                                            <span className="ms-2 text-muted">Virudhunagar, Tamil Nadu</span>
                                        </li>
                                    </ul>
                                </div>


                                {/* Buttons */}



                                <div className="applybtn_center">
                                    <button className="btn card-btn mb-2">Apply Now</button>
                                    <button className="btn card-btn1 mb-4 fw-bold">Job Details</button>
                                </div>



                            </div>
                        </div>
                    ))}



                </div>

                <div className=" mt-4 mb-4">
                    <a href="#" className=" job_viewall text-decoration-none">View All Jobs →</a>
                </div>
            </div>



            {/* vacant roles */}


            <div className="container mb-5">

                <div className="row">
                    {/* Text Container */}
                    <div className="text-container mb-4 text-center">
                        <div className="line"></div>
                        <div className="text">Vacant Roles</div>
                        <div className="line"></div>
                    </div>

                    {/* Job Section */}
                    <div className="container text-center mt-5">
                        <div className="row g-3 vacant_rowsec">
                            {/* Full Time */}
                            <div className="col-6 col-md-3">
                                <div className="vacant-card card p-3 bg-primary text-white">
                                    <img src={fram1} alt="Full Time" className="img-fluid card-img" />
                                    <h5 className="mt-2">Full Time</h5>
                                </div>
                            </div>

                            {/* Part Time */}
                            <div className="col-6 col-md-3">
                                <div className="vacant-card card p-3 bg-primary text-white">
                                    <img src={fram2} alt="Part Time" className="img-fluid card-img" />
                                    <h5 className="mt-2">Part Time</h5>
                                </div>
                            </div>

                            {/* Contract */}
                            <div className="col-6 col-md-3">
                                <div className="vacant-card card p-3 bg-primary text-white">
                                    <img src={fram3} alt="Contract" className="img-fluid card-img" />
                                    <h5 className="mt-2">Contract</h5>
                                </div>
                            </div>

                            {/* Temporary */}
                            <div className="col-6 col-md-3">
                                <div className="vacant-card card p-3 bg-primary text-white">
                                    <img src={fram4} alt="Temporary" className="img-fluid card-img" />
                                    <h5 className="mt-2">Temporary</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>





            {/* ------------------------------------------------------------------------------- */}
            {/* Trending Categories */}

            <div className="container">
                <div className="row mobile_tramdcate">

                    {/* Section Title */}
                    <div className="text-container mb-4 text-center">
                        <div className="line"></div>
                        <div className="text">Trending Categories</div>
                        <div className="line"></div>
                    </div>

                    {/* Categories Grid */}
                    <div className="row text-center gapfor_lg">
                        {[
                            { img: t_c1, title: "Finance & Accounting" },
                            { img: t_c2, title: "IT" },
                            { img: t_c3, title: "Healthcare & Medical" },
                            { img: t_c4, title: "Creative & Design" },
                            { img: t_c5, title: "Construction" },
                            { img: t_c6, title: "Education & Training" },
                            { img: t_c7, title: "Human Resources" },
                            { img: t_c8, title: "Customer Service" },
                            { img: t_c9, title: "Sales & Marketing" },
                            { img: t_c10, title: "E-Commerce" }
                        ].map((category, index) => (
                            <div key={index} className="col-xl-2 col-lg-2 col-md-3 col-6 text-center mb-4">
                                <div className="category-card">
                                    <img src={category.img} alt={category.title} className="img-fluid" />
                                    <span className="category-text">{category.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>







            {/* ----------------------------------------------------------------------- */}
            {/* input_bluebox */}



            <div className="red_box_container">
                <div className="row red_box p-3 p-md-4 p-lg-5 d-flex align-items-center">
                    {/* First Column */}
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <span className="redhrboxtext">Never Miss an Opportunity!</span>
                        <p className="redhrboxpara">
                            Sign up for job alerts and get updates on the latest openings tailored to your preferences.
                        </p>
                    </div>

                    {/* Second Column */}
                    <div className="col-12 col-md-6 d-flex flex-column flex-sm-row align-items-center justify-content-center">
                        <input
                            type="text"
                            className="redhrbox-input text-center p-2"
                            placeholder="Enter your email address"
                        />
                        <button type="button" className="redhrbox-btn">Subscribe Now</button>
                    </div>
                </div>
            </div>




            {/* ---------------------------------------------------------------- */}

            {/* Top Locations */}




            <div className="container-fluid mt-5">
                <div className="row toplocation">
                    <div className="text-container mb-4 text-center">
                        <div className="line"></div>
                        <div className="text"> Trending Categories</div>
                        <div className="line"></div>
                    </div>

                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner  ">

                            {/* Slide 1 */}
                            <div className="carousel-item active">
                                <div className="row justify-content-center">
                                    {/* First image always visible */}
                                    <div className="col-12 col-md-4 text-center">
                                        <img src={theni} className="city_img" alt="Theni" />
                                        <br />
                                        <button type="button" className="btn  city_btn">Theni</button>
                                    </div>
                                    {/* These will be hidden on small screens */}
                                    <div className="col-md-4 text-center d-none d-md-block">
                                        <img src={kanchipuram} className="city_img" alt="Kanchipuram" />
                                        <br />
                                        <button type="button" className="btn  city_btn">Kanchipuram</button>
                                    </div>
                                    <div className="col-md-4 text-center d-none d-md-block">
                                        <img src={chennaiing} className="city_img" alt="Chennai" />
                                        <br />
                                        <button type="button" className="btn  city_btn">Chennai</button>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className="carousel-item">
                                <div className="row justify-content-center">
                                    {/* First image always visible */}
                                    <div className="col-12 col-md-4 text-center">
                                        <img src={chennaiing} className="city_img" alt="Chennai" />
                                        <br />
                                        <button type="button" className="  city_btn">Chennai</button>
                                    </div>
                                    {/* These will be hidden on small screens */}
                                    <div className="col-md-4 text-center d-none d-md-block">
                                        <img src={theni} className="city_img" alt="Theni" />
                                        <br />
                                        <button type="button" className=" city_btn">Theni</button>
                                    </div>
                                    <div className="col-md-4 text-center d-none d-md-block">
                                        <img src={kanchipuram} className="city_img" alt="Kanchipuram" />
                                        <br />
                                        <button type="button" className="  city_btn">Kanchipuram</button>
                                    </div>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className="carousel-item">
                                <div className="row justify-content-center">
                                    {/* First image always visible */}
                                    <div className="col-12 col-md-4 text-center d-none d-md-block">
                                        <img src={chennaiing} className="city_img" alt="Chennai" />
                                        <br />
                                        <button type="button" className=" city_btn">Chennai</button>
                                    </div>
                                    {/* These will be hidden on small screens */}
                                    <div className="col-md-4 text-center d-none d-md-block">
                                        <img src={theni} className="city_img" alt="Theni" />
                                        <br />
                                        <button type="button" className="  city_btn">Theni</button>
                                    </div>
                                    <div className="col-md-4 text-center ">
                                        <img src={kanchipuram} className="city_img" alt="Kanchipuram" />
                                        <br />
                                        <button type="button" className=" city_btn">Kanchipuram</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Manual Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon  bg-primary   inner_carousalbtn2 rounded-5" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon  bg-primary inner_carousalbtn rounded-5" aria-hidden="true"></span>

                            <span className="visually-hidden">Next</span>

                        </button>
                    </div>
                </div>
            </div>




            {/* Why HRIFY Jobs is the Best Choice for You! */}


            <div className="container-fluid mt-5">
                <div className="row">

                    <div className="text-container mb-4 text-center">
                        <div className="line"></div>
                        <div className="text">Why HRIFY Jobs is the Best Choice for You!</div>
                        <div className="line"></div>
                    </div>

                    <div className="col-lg-6">

                        <div className="">

                            <div className="d-flex gap-1">
                                <img src={bag} alt="" />

                                <span className='Tailored' >Tailored Job Matches</span>


                            </div>
                            <p className='Tailoredpara mt-2' >We provide personalized job recommendations based on your skills and preferences.</p>


                        </div>



                        <div className="">
                            <div className="d-flex gap-1">
                                <img src={bag} alt="" />
                                <span className='Tailored' >Trusted by Top Employers</span>
                            </div>
                            <p className='Tailoredpara mt-2' >We provide personalized job recommendations based on your skills and preferences.</p>
                        </div>


                        <div className="">

                            <div className="d-flex gap-1">
                                <img src={bag} alt="" />

                                <span className='Tailored' > Easy Application Process</span>


                            </div>
                            <p className='Tailoredpara mt-2' >Apply to multiple jobs with just one click using your saved profile.</p>


                        </div>


                        <div className="">

                            <div className="d-flex gap-1">
                                <img src={bag} alt="" />

                                <span className='Tailored' >Real-Time Alerts</span>

                            </div>
                            <p className='Tailoredpara mt-2' >Stay updated with instant alerts for the latest job openings.</p>


                        </div>



                        <div className="">

                            <div className="d-flex gap-1">
                                <img src={bag} alt="" />

                                <span className='Tailored' >Verified Listings</span>

                            </div>
                            <p className='Tailoredpara mt-2' >Find genuine opportunities with our verified job postings.</p>


                        </div>


                    </div>

                    <div className="col-lg-6">
                        <img src={footertopimg} className="img-fluid" alt="" />
                    </div>
                </div>

            </div>

            {/* ------------------------------------------------------------------------------------------------------------- */}




        </div>





    )
}

export default Herosection