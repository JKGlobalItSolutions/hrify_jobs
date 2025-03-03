import React from 'react'
import { Link } from 'react-router-dom'

import bag from '../img/navimg/bag.png'

import Jobspageclockicon from '../img/About-img/jobpageclock_icon.png';


import blue_bag from '../img/About-img/blue_box.png'
import tik_icon from '../img/About-img/tik_icon.png'









const Jobdetailspage = () => {

    const Jobspagedata = [

        {
            title: "Software Developer",
            type: "Full Time",
            company: "Tyre Shop",
            location: "Virudhunagar, Tamil Nadu",
            salary: "₹50,000",
            gender: "Any",
            posted_day: "1 day Ago"
        },


        {
            title: "Delivery Executive",
            type: "Full Time",
            company: "FastTrack Logistics",
            location: "Kanyakumari, Tamil Nadu",
            salary: "₹12,000",
            gender: "Male",
            posted_day: "3 day Ago"
        },
        {
            title: "Software Developer",
            type: "Full Time",
            company: "Tyre Shop",
            location: "Virudhunagar, Tamil Nadu",
            salary: "₹50,000",
            gender: "Any",
            posted_day: "4 day Ago"
        }
    ];






    return (
        <div>


            {/* header section  */}

            <div class="container-fluid ">

                <div className="row   align-items-center banner banner ">
                    <div className="col-lg-12 text-center">

                        <h1 className='fw-bold'>Your Dream Job is Just a <span class="highlight">Click Away!</span></h1>
                        <p className='text-secondary' style={{ fontSize: "24px" }}><img src={bag} alt="" style={{ width: '24px' }} /> Explore job details & apply effortlessly.</p>

                    </div>


                </div>


            </div>


            {/* link navigate */}

            <div className="container-fluid  ">
                <div className="row ">

                    <div className="col-lg-12 mb-3 mt-3 ">


                        {/* <h6 className="nav-item  text-secondary"> <Link to={"/"} className='text-decoration-none'> Home</Link>  <span> <i class="fa-solid fa-greater-than  " style={{width:'10px'}}></i> </span> <Link to="/jobspage" className="text-decoration-none"> jobpage </Link>  <i class="fa-solid fa-greater-than  "></i> jobdetailspage </h6> */}

                        <h6 className="nav-item ">
                            <Link to={"/"} className="text-decoration-none text-secondary">Home</Link>
                            <span> <i className="fa-solid fa-greater-than" style={{ fontSize: "10px" }}></i> </span>
                            <Link to="/jobspage" className="text-decoration-none text-secondary">Job Page</Link>
                            <i className="fa-solid fa-greater-than" style={{ fontSize: "10px" }}></i>
                            <span style={{ color: "#0080A7", fontWeight: "bold" }}>Job Details Page</span>
                        </h6>



                    </div>

                </div>
            </div>


            {/* ---------------------------------------------------------------------------------------------------- */}
            {/* job post full data show */}


            <div class="container mt-5   ">

                <div className=" bg-white rounded-2 p-5">

                    <div class="job-card">
                        <div class="row">
                            {/* <!-- Company Logo --> */}



                            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '171px', height: '171px', backgroundColor: 'rgba(217, 217, 217, 1)' }}>
                                <span>Company Logo</span>
                            </div>


                            {/* <!-- Job Details --> */}
                            <div class="col-md-10">
                                <h2 class="highlight">Software Engineer</h2>
                                <h5>TCS (Tata Consultancy Services)</h5>
                                <p><i class="fas fa-map-marker-alt"></i> Chennai, Tamil Nadu</p>
                                <p>🏡 Hybrid (2 Days Work from Home)</p>
                            </div>
                        </div>

                        {/* <!-- Job Description --> */}
                        <p class="mt-3">
                            We are looking for a highly skilled Software Engineer to join our dynamic team at TCS, Chennai. As a Software Engineer, you will be responsible for developing, testing, and maintaining high-performance web applications. You will collaborate with cross-functional teams to design scalable solutions and ensure seamless user experiences. The ideal candidate should have a strong understanding of Java, Spring Boot, REST APIs, and database management. If you are passionate about coding, problem-solving, and working in an innovative environment, we would love to have you on board. Join us to build cutting-edge technology solutions that make an impact!
                        </p>

                        {/* <!-- Job Details --> */}
                        <h5 class="highlight mt-4">Job Location & Work Mode</h5>
                        <p><strong className='highlight'>Location:</strong> Chennai, Tamil Nadu</p>
                        <p><strong className='highlight'>Work Mode:</strong> Hybrid (On-site + Work from Home)</p>

                        <h5 class="highlight mt-4">Salary & Benefits</h5>
                        <p><strong className='highlight'>Salary Range:</strong> ₹6 LPA - ₹10 LPA</p>
                        <p><strong className='highlight'>Benefits:</strong> Health Insurance, PF, Paid Leaves, Annual Bonus</p>

                        <h5 class="highlight mt-4">Job Description & Responsibilities</h5>
                        <ul className='list-unstyled '>
                            <li className="mb-2"> <img src={tik_icon} style={{ width: '20px' }} alt="" /> Develop and maintain web applications using Java and Spring Boot.</li>
                            <li className="mb-2"> <img src={tik_icon} style={{ width: '20px' }} alt="" /> Collaborate with cross-functional teams to design and implement new features.</li>
                            <li className="mb-2"> <img src={tik_icon} style={{ width: '20px' }} alt="" /> Ensure high performance, reliability, and security in applications.</li>
                            <li className="mb-2"> <img src={tik_icon} style={{ width: '20px' }} alt="" /> Debug and troubleshoot software issues.</li>
                            <li className="mb-2"> <img src={tik_icon} style={{ width: '20px' }} alt="" /> Participate in Agile development processes.</li>
                        </ul>

                        <h5 class="highlight mt-4">Required Skills & Qualifications</h5>
                        <p><strong className='highlight'> <img src={blue_bag} alt="" style={{ width: '20px' }} /> Education:</strong> B.E/B.Tech in Computer Science or equivalent.</p>
                        <p><strong className='highlight'> <img src={blue_bag} alt="" style={{ width: '20px' }} /> Experience:</strong> 2-5 Years</p>
                        <p><strong className='highlight'> <img src={blue_bag} alt="" style={{ width: '20px' }} /> Technical Skills:</strong> Java, Spring Boot, MySQL, REST API, Git, Docker.</p>
                        <p><strong className='highlight'> <img src={blue_bag} alt="" style={{ width: '20px' }} /> Soft Skills:</strong> Strong analytical thinking, problem-solving, teamwork.</p>

                        <h5 class="highlight mt-4">Application Deadline</h5>
                        <p class="deadline">❗ Apply Before: March 15, 2025</p>

                        {/* <!-- Buttons --> */}
                        <div class="d-flex flex-column flex-md-row gap-2 mt-4">

                            <button className="btn btn-custom w-100"> <Link to="/jobapplypage" className="text-decoration-none text-white d-block w-100 text-center">  Apply Now   </Link> </button>
                            <button className="btn btn-custom w-100"> <Link to="/" className="text-decoration-none text-white d-block w-100 text-center">  Save Now   </Link> </button>
                            <button className="btn btn-custom w-100"> <Link to="/" className="text-decoration-none text-white d-block w-100 text-center">  Share Now   </Link> </button>

                        </div>
                    </div>



                </div>





            </div>

            {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
            {/* Relevant Similar Job  text */}


            <div className="container">



                <div className="row">
                    <div className="col-lg-12 mt-3 mb-3">

                        <h4 className='highlight'>Relevant Similar Job</h4>

                    </div>

                </div>

                {/* --------------- */}
                {/* Relevant Similar Job  recommeded job card */}


                <div className="row">



                    <div className="col-lg-12 mb-5">
                        <div className="container">
                            <div className="row justify-content-center">

                                {/* Map through Jobspagedata to display job cards    and click to navigate the jobdetailspage for using link */}

                                {Jobspagedata.map((job, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mt-4">
                                        {/* Link wraps only the card, excluding buttons */}
                                        <Link to={"/jobdetailspage"} className='text-decoration-none'>
                                            <div className="card shadow-lg bg-white rounded position-relative py-2">
                                                <div className="d-flex">
                                                    <h5 className="mt-1 position-absolute" style={{ top: '10px', right: '10px', border: '0px', backgroundColor: 'none' }} aria-label="Close">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </h5>
                                                    <span className='ms-3 text-secondary'>
                                                        <img src={Jobspageclockicon} className='Jobspageclockicon' alt="" /> posted- {job.posted_day}
                                                    </span>
                                                </div>

                                                <div className="card-body text-center mt-4">
                                                    <div className="d-flex justify-content-center mb-3">
                                                        <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '171px', height: '171px', backgroundColor: 'rgba(217, 217, 217, 1)' }}>
                                                            <span>Company Logo</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex text-start px-3">
                                                        <div className="d-grid">
                                                            <b>Job Title:</b>
                                                            <b>Job Type:</b>
                                                            <b>Company Name:</b>
                                                            <b>Location:</b>
                                                            <b>Salary:</b>
                                                            <b>Gender:</b>
                                                        </div>
                                                        <div className="ms-3">
                                                            <p className="mb-1">{job.title}</p>
                                                            <p className="mb-1">{job.type}</p>
                                                            <p className="mb-1">{job.company}</p>
                                                            <p className="mb-1">{job.location}</p>
                                                            <p className="mb-1">{job.salary}</p>
                                                            <p className="mb-1">{job.gender}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="badge position-absolute Expiry p-2" style={{ top: '375px', right: '10px' }}>
                                                    Expiry in <br /> 10 Days
                                                </span>
                                            </div>
                                        </Link>

                                        {/* Separate Buttons (Not Wrapped in Link) */}
                                        <div className="d-flex flex-column flex-md-row">
                                            <button className="btn Jobspagebtn text-white flex-grow-1 mb-2 mb-md-0" style={{ padding: '12px', fontWeight: 'bold', backgroundColor: '#0080A7', borderRadius: '0px' }}>
                                                View Job
                                            </button>
                                            <button className="btn Jobspagebtn btn-dark flex-grow-1 mb-2 mb-md-0" style={{ padding: '12px', fontWeight: 'bold', borderRadius: '0px' }}>
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>
                    </div>





                </div>






            </div>

















        </div>
    )
}

export default Jobdetailspage