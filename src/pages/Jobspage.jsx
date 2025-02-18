import React from 'react'
import { Link } from "react-router-dom";




import Jobspagetopimg from '../img/About-img/jobpagetopimg.png'
import Jobspageclockicon from '../img/About-img/jobpageclock_icon.png'




const Jobspage = () => {


    const Jobspagedata = [
        {
            title: "Heavy Vehicle Mechanic",
            type: "Full Time",
            company: "Tyre Shop",
            location: "Virudhunagar, Tamil Nadu",
            salary: "₹10,000",
            gender: "Male",
            posted_day: "4 day Ago"

        },
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

            <div class="container-fluid">



                <div class="row align-items-center banner">


                    <div class="col-lg-6 text-center text-lg-start">
                        <h1>Find <span class="highlight">Your Dream</span> Job</h1>
                        <h1>Start <span class="highlight">Your Career</span> Journey Today!</h1>
                        <p class="mt-3">
                            "Browse thousands of job opportunities across industries. Apply with one click and take the next step in your career with HRIFY Jobs!"
                        </p>
                        <div class="mt-4">
                            <button class="btn btn-custom me-2">Explore Jobs</button>
                            <button class="btn btn-custom">Post a Job</button>
                        </div>
                    </div>


                    <div class="col-lg-6 mt-4 mt-lg-0 text-center">
                        <img src={Jobspagetopimg} alt="Job Offer Illustration" class="img-fluid  jobpagetopimg " />
                    </div>

                </div>


            </div>



            {/*  ------------------------------------------------------------------------------ */}


            {/* dropdown section */}

            <div className="container-fluid jobpagedropdown_width d-flex align-items-center justify-content-center">
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

                            <button type="button" className="px-4 jobpagedropdown-btn w-auto w-md-100">
                                <i className="fa-solid fa-magnifying-glass me-2 ms-2"></i>Search
                            </button>


                        </div>

                    </div>

                </div>
            </div>









            {/*  ------------------------------------------------------------------------------ */}

            {/* filter section */}

            <div class="container-fluid mt-lg-5 mb-lg-5">



                {/* link navigate */}

                <div className="container-fluid  mb-5">
                    <div className="row ">

                        <div className="col-lg-12 link_navigate mt-2 ">

                            <h5 className="nav-item  text-secondary"> Jobs <span> <i class="fa-solid fa-greater-than  "></i>  </span> <Link to="/" className="text-decoration-none"> Home </Link> </h5>


                        </div>

                    </div>
                </div>


                <div class="row filter_sec ">



                    {/* <!-- Sidebar Column (Filter Section) --> */}
                    <div class=" col-lg-4">
                        <div class="filter-sidebar">
                            <div class="filter-title d-flex justify-content-between align-items-center">
                                <span>Filters</span>
                                <button class="reset-btn btn btn-sm btn-dark">Reset All</button>
                            </div>

                            {/* <!-- Job Type Dropdown --> */}
                            <div class="filter-category " data-bs-toggle="collapse" data-bs-target="#jobType">
                                Job Type <span>⬇️</span>
                            </div>
                            <div id="jobType" class="collapse show">

                                <div class="form-check">
                                    <label class="form-check-label" for="full-time">Full-Time</label>
                                    <input class="form-check-input" type="checkbox" id="full-time" />
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label" for="part-time">Part-Time</label>
                                    <input class="form-check-input" type="checkbox" id="part-time" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="Internship">Internship</label>
                                    <input class="form-check-input" type="checkbox" id="Internship" />
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label" for="Freelance">Freelance</label>
                                    <input class="form-check-input" type="checkbox" id="Freelance" />
                                </div>


                                <div class="form-check">
                                    <label class="form-check-label" for="Contract">Contract</label>
                                    <input class="form-check-input" type="checkbox" id="Contract" />
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label" for="Temporary">Temporary</label>
                                    <input class="form-check-input" type="checkbox" id="Temporary" />
                                </div>


                                <div class="form-check">
                                    <label class="form-check-label" for="Remote (Work from Home)">Remote (Work from Home)</label>
                                    <input class="form-check-input" type="checkbox" id="Remote (Work from Home)" />
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label" for="Hybrid">Hybrid</label>
                                    <input class="form-check-input" type="checkbox" id="Hybrid" />
                                </div>




                            </div>


                            {/* <!-- Experience Level Dropdown --> */}
                            <div class="filter-category" data-bs-toggle="collapse" data-bs-target="#experienceLevel">
                                Experience Level <span>⬇️</span>
                            </div>
                            <div id="experienceLevel" class="collapse show">

                                <div class="form-check">
                                    <label class="form-check-label" for="fresher">Fresher (0-1 Year)</label>
                                    <input class="form-check-input" type="checkbox" id="fresher" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="Junior">Junior (1-3 Years)</label>
                                    <input class="form-check-input" type="checkbox" id="Junior" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="Mid-Level">Mid-Level (3-5 Years)</label>
                                    <input class="form-check-input" type="checkbox" id="Mid-Level" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="Senior">Senior (5+ Years)</label>
                                    <input class="form-check-input" type="checkbox" id="Senior" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="Executive">Executive / Managerial</label>
                                    <input class="form-check-input" type="checkbox" id="Executive" />
                                </div>

                            </div>


                            {/* <!-- Salary Range Dropdown --> */}
                            <div class="filter-category" data-bs-toggle="collapse" data-bs-target="#salaryRange">
                                Salary Range <span>⬇️</span>
                            </div>
                            <div id="salaryRange" class="collapse">

                                <div class="form-check">
                                    <label class="form-check-label" for="salary10k">₹10K - ₹20K</label>
                                    <input class="form-check-input" type="checkbox" id="salary10k" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="salary10k">₹20K - ₹50K</label>
                                    <input class="form-check-input" type="checkbox" id="salary10k" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="salary10k">₹50K - ₹1L</label>
                                    <input class="form-check-input" type="checkbox" id="salary10k" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="salary10k">₹1L - ₹2L</label>
                                    <input class="form-check-input" type="checkbox" id="salary10k" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="salary10k">₹2L & Above</label>
                                    <input class="form-check-input" type="checkbox" id="salary10k" />
                                </div>

                            </div>

                            {/* <!-- Industry / Job Category Dropdown --> */}
                            <div class="filter-category" data-bs-toggle="collapse" data-bs-target="#industryCategory">
                                Industry / Job Category <span>⬇️</span>
                            </div>
                            <div id="industryCategory" class="collapse">

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">IT & Software</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Healthcare & Pharma</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Education & Training</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Finance & Banking</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>


                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Marketing & Sales</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Manufacturing & Engineering</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Retail & E-commerce</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Media & Entertainment</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Government & Public Sector</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Logistics & Supply Chain</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="it-software">Real Estate & Construction</label>
                                    <input class="form-check-input" type="checkbox" id="it-software" />
                                </div>



                            </div>

                            {/* <!-- Location Dropdown --> */}
                            <div class="filter-category" data-bs-toggle="collapse" data-bs-target="#location">
                                Location <span>⬇️</span>
                            </div>
                            <div id="location" class="collapse">

                                <div class="form-check">
                                    <label class="form-check-label" for="city-based">City-Based Selection</label>
                                    <input class="form-check-input" type="checkbox" id="city-based" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="city-based"> Remote / Work from Home</label>
                                    <input class="form-check-input" type="checkbox" id="city-based" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="city-based">Nearby Jobs</label>
                                    <input class="form-check-input" type="checkbox" id="city-based" />
                                </div>

                            </div>


                            {/* <!-- Posted Date Dropdown --> */}
                            <div class="filter-category" data-bs-toggle="collapse" data-bs-target="#postedDate">
                                Posted Date <span>⬇️</span>
                            </div>
                            <div id="postedDate" class="collapse">

                                <div class="form-check">
                                    <label class="form-check-label" for="last-24-hours">Last 24 Hours</label>
                                    <input class="form-check-input" type="checkbox" id="last-24-hours" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="last-24-hours"> Last 7 Days</label>
                                    <input class="form-check-input" type="checkbox" id="last-24-hours" />
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label" for="last-24-hours"> Last 30 Days</label>
                                    <input class="form-check-input" type="checkbox" id="last-24-hours" />
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* job card section */}


                    <div className="col-lg-8">
                        <div className="container">
                            <div className="row justify-content-center">

                                {/* Map through Jobspagedata to display job cards */}
                                {Jobspagedata.map((job, index) => (
                                    <div key={index} className="col-lg-6 col-md-6 col-sm-12 mt-4">
                                        <div className="card shadow-lg bg-white rounded position-relative py-2">
                                            <div className=" d-flex">
                                                <h5 className=" mt-1 position-absolute" style={{ top: '10px', right: '10px', border: '0px', backgroundColor: 'none' }} aria-label="Close">   <i class="fa-regular fa-heart "></i></h5>
                                                <span className='ms-3 text-secondary' ><img src={Jobspageclockicon} className='Jobspageclockicon' alt="" /> posted- {job.posted_day} </span>
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
                                            <div className="d-flex flex-column flex-md-row">

                                                <button className="btn Jobspagebtn  text-white flex-grow-1 mb-2 mb-md-0" style={{ padding: '12px', fontWeight: 'bold', backgroundColor: '#0080A7', borderRadius: '0px' }}>
                                                    View Job
                                                </button>

                                                <button className="btn Jobspagebtn btn-dark flex-grow-1 mb-2 mb-md-0" style={{ padding: '12px', fontWeight: 'bold', borderRadius: '0px' }}>
                                                    Apply Now
                                                </button>

                                            </div>
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

export default Jobspage