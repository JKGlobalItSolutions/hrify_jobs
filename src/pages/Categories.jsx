import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import img1 from "../img/Favorites-img/Frame 1732.png";
// import img2 from "../img/Categories-img/hero_img.png";
// import img3 from "../img/Categories-img/file-logo.png";
// import img4 from "../img/Categories-img/option.png";





const jobs = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Google",
        location: "Bangalore",
        salary: "₹18 LPA",
        posted: "3 Days Ago",
    },
    {
        id: 2,
        title: " Data Analyst  ",
        company: "Cognizant",
        location: "Chennai",
        salary: "₹5 LPA - ₹8 LPA",
        posted: "3 Days Ago",
    },
    {
        id: 3,
        title: "Graphic Designer ",
        company: "Freshworks",
        location: "Chennai",
        salary: "₹3.5 LPA - ₹6 LPA",
        posted: "3 Days Ago",
    },
    {
        id: 4,
        title: "Civil Engineer ",
        company: "L & T Construction",
        location: "Salem",
        salary: "₹5 LPA - ₹9 LPA",
        posted: "3 Days Ago",
    },

];
const jobs1 = [
    {
        id: 1,
        title: "Content Writer",
        company: "Infosys",
        location: "Coimbatore",
        salary: " ₹2.5 LPA - ₹5 LPA",
        posted: "3 Days Ago",
    },
    {
        id: 2,
        title: " Customer Sup Exc",
        company: "Amazon",
        location: "Chennai  ",
        salary: "₹2.8 LPA - ₹4.5 LPA",
        posted: "3 Days Ago",
    },
    {
        id: 3,
        title: "Mechanical Eng ",
        company: "Ashok Leyland",
        location: "Hosur",
        salary: "₹4 LPA - ₹7 LPA",
        posted: "3 Days Ago",
    },
    {
        id: 4,
        title: "Sales Executive ",
        company: "HDFC BAnk",
        location: "Trichy",
        salary: "₹2 LPA - ₹4 LPA",
        posted: "3 Days Ago",
    },

];




const Categories = () => {




    const [agreed, setAgreed] = useState(false);




    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="container-fluid dream_job_hero py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center about-shadow">
                        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                            <h2 className="fw-bold mb-3">Find Your Dream Job Today!</h2>
                            <p className="dream_job_para mx-auto mb-4">
                                Explore job opportunities across various industries and take the next step in your career. Browse by category and apply with ease!
                            </p>
                            <button className="dream_job_btn btn btn-primary">Get Started</button>
                        </div>
                        <div className="col-12 col-lg-6 text-center">
                            {/* <img src={img2} alt="Job Search" className="img-fluid" style={{ maxWidth: '500px' }} /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                {/* Navigation and Search */}
                <div className="row align-items-center justify-content-between mb-4">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Categories</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="d-flex align-items-center gap-3">
                            <div className="input-group flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control search-input"
                                    placeholder="Enter Job Title, Keywords, Company Name"
                                    aria-label="Search"
                                />
                                <span className="input-group-text"><i className="bi bi-search"></i></span>
                            </div>
                            {/* <img
                                className="opt-btn img-fluid"
                                style={{ width: '40px', cursor: 'pointer' }}
                                src={img1}
                                alt="Options"
                            /> */}
                        </div>
                    </div>
                </div>

                {/* Job Categories Grid */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                    {[
                        { icon: "bi-code-slash", title: "IT & Software", count: "200+" },
                        { icon: "bi-cash-coin", title: "Finance & Accounting", count: "150+" },
                        { icon: "bi-hospital", title: "Healthcare & Medical", count: "120+" },
                        { icon: "bi-brush", title: "Creative & Design", count: "90+" },
                        { icon: "bi-tools", title: "Construction", count: "80+" },
                        { icon: "bi-easel", title: "Education & Training", count: "100+" },
                        { icon: "bi-people", title: "Human Resources", count: "75+" },
                        { icon: "bi-headset", title: "Customer Service", count: "110+" }
                    ].map((category, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100 shadow-sm border-0 text-center p-4 dream_job_card text-white">
                                <div className="card-body">
                                    <i className={`bi ${category.icon} display-4 mb-3`}></i>
                                    <h5 className="card-title mb-2">{category.title}</h5>
                                    <p className="card-text text-warning fw-bold fs-4">{category.count}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>







                {/* Trending Jobs */}

                <div className="Trending_job_heading d-flex ">

                    <hr className='Trending_job_line   w-25 ' />

                    <h2 className='ms-2'>Trending Jobs</h2>

                    <hr className='Trending_job_line ms-2 w-25 ' />







                </div>



                <div className="container-fluid mt-4">
                    <div className="row g-3">
                        {jobs.map((job) => (
                            <div key={job.id} className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card shadow-sm mb-4 gap-1" style={{ width: "100%", height: "423px" }}>
                                    <div className="d-flex p-3 justify-content-between align-items-start">
                                        <small className="text-muted">Posted - {job.posted}</small>
                                        <i className="bi bi-heart"></i>
                                    </div>
                                    <div className="text-center my-2 company_log">
                                        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto"
                                            style={{ width: "150px", height: "150px" }}>
                                            <span className="text-muted">Company Logo</span>
                                        </div>
                                    </div>
                                    <div className="d-flex ms-4">
                                        <div className="d-grid gap-2">
                                            <strong>Job Title</strong>
                                            <strong>Company Name</strong>
                                            <strong>Location</strong>
                                            <strong>Salary</strong>
                                        </div>
                                        <div className="d-grid ms-3 pt-0">
                                            <p>{job.title}</p>
                                            <p>{job.company}</p>
                                            <p>{job.location}</p>
                                            <p>{job.salary}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                                        <button className="dream_job_cardbtn1 w-100 ">View Job</button>
                                        <button className="dream_job_cardbtn2 w-100 ">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container-fluid mt-4">
                    <div className="row ">
                        {jobs1.map((job) => (
                            <div key={job.id} className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card shadow-sm mb-4 gap-1" style={{ width: "100%", height: "423px" }}>
                                    <div className="d-flex p-3 justify-content-between align-items-start">
                                        <small className="text-muted">Posted - {job.posted}</small>
                                        <i className="bi bi-heart"></i>
                                    </div>
                                    <div className="text-center my-2 company_log">
                                        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto"
                                            style={{ width: "150px", height: "150px" }}>
                                            <span className="text-muted">Company Logo</span>
                                        </div>
                                    </div>
                                    <div className="d-flex ms-4">
                                        <div className="d-grid gap-2">
                                            <strong>Job Title</strong>
                                            <strong>Company Name</strong>
                                            <strong>Location</strong>
                                            <strong>Salary</strong>
                                        </div>
                                        <div className="d-grid ms-3 pt-0">
                                            <p>{job.title}</p>
                                            <p>{job.company}</p>
                                            <p>{job.location}</p>
                                            <p>{job.salary}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                                        <button className="dream_job_cardbtn1 w-100 ">View Job</button>
                                        <button className="dream_job_cardbtn2 w-100 ">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>




            <div class="container-fluid subscribe-section text-center">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-lg-start text-start">
                            <h2 class="fw-medium subscribe-title text-start">Get Hired Faster!</h2>
                            <p class="fs-5">
                                Be the first to know about new job openings that match your skills.
                                Subscribe now and land your dream job with ease!
                            </p>
                        </div>
                        <div class="col-lg-6 mt-3 mt-lg-0">
                            <div class="input-group ">
                                <input type="email" class="form-control email_input" placeholder="Enter your email address" />
                                <button class="btn btn-warning fs-6 fw-bold email_btn">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="container job_from mt-4">
                <form className="border p-4 rounded shadow-lg bg-white">
                    <h4 className="mb-3 fw-bolder fs-3" style={{ color: " #0080A7" }}>Job Details</h4>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Job Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Company Name</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Company Logo</label>
                            <input className="form-control position-relative" />
                            {/* <img src={img3} alt="" type="file" className=" position-absolute file_logo" style={{ maxWidth: '30px' }} /> */}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Job Location</label>
                            <input type="text" className="form-control  position-relative" />
                            {/* <img src={img4} alt="" type="file" className=" position-absolute file_logo" style={{ maxWidth: '30px' }} /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Salary Range</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Employment Type</label>
                            <input type="text" className="form-control position-relative" />
                            {/* <img src={img4} alt="" type="option" className=" position-absolute file_logo" style={{ maxWidth: '30px' }} /> */}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Application Deadline</label>
                        <input type="date" className="form-control date_Experience" style={{width: "630px"}} />
                    </div>

                    <h4 className="mb-3  fw-bolder fs-3" style={{ color: " #0080A7" }}>Job Description</h4>
                    <div className="mb-3">
                        <label>Job Summary</label>
                        <textarea className="form-control job_summary" rows="6"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Key Responsibilities</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Required Skills</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Minimum Experience</label>
                        <input type="text" className="form-control date_Experience"style={{width: "630px"}} />
                    </div>

                    <h4 className="mb-3 fw-bolder fs-3" style={{ color: " #0080A7" }}>Application Preferences</h4>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>How to Apply?</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Company Name</label>
                            <input type="text" className="form-control" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Company Logo</label>
                            <input className="form-control position-relative" />
                            {/* <img src={img3} alt="" type="file" className=" position-absolute file_logo" style={{ maxWidth: '30px' }} /> */}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Job Location</label>
                            <input type="text" className="form-control  position-relative" />
                            {/* <img src={img4} alt="" type="file" className=" position-absolute file_logo" style={{ maxWidth: '30px' }} /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Salary Range</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Employment Type</label>
                            <input type="text" className="form-control position-relative" />
                            {/* <img src={img4} alt="" type="option" className=" position-absolute file_logo" style={{ maxWidth: '30px' }} /> */}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Application Deadline</label>
                        <input type="date" className="form-control date_Experience" style={{width: "630px"}} />
                    </div>


                    <div className=" mb-">
                        <input
                            type="checkbox"
                            className="form-check-input conform_btn mt-2"
                            id="termsCheckbox"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                        />
                        <label className="form-check-label ms-2" htmlFor="termsCheckbox">
                            I agree to the Terms & Conditions.
                        </label>
                    </div>

                    <div className="text-center">
                        <button className="btn Post_a_Job mt-4" disabled={!agreed}>
                            Post a Job
                        </button>
                    </div>
                </form>
            </div>














        </div>
    );
};

export default Categories;