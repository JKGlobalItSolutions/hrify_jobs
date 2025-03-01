import React from 'react';

import { Link } from 'react-router-dom';



const Jobapplypage = () => {
    return (

        <div>

            {/* Header Section */}

            <div className="container-fluid">
                <div className="row align-items-center banner">
                    <div className="col-lg-12 text-center">
                        <h1 className="fw-bold">
                            Apply  <span className="highlight">Today</span> - Hired <span className="highlight">Tomorrow</span>
                        </h1>
                        <p className="text-secondary" style={{ fontSize: '24px' }}>
                            <span>🚀</span> Your next career move starts here
                        </p>


                    </div>
                </div>
            </div>


            {/* ----------------------------------------------------------------------------------- */}



            <div className="container mt-5 mb-4">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-12">
                        <div className="job-card d-flex flex-wrap align-items-start p-4 bg-white rounded shadow position-relative">

                            {/* Company Logo (Increased Top Spacing & Size) */}
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{
                                    width: '160px',
                                    height: '160px',
                                    backgroundColor: 'rgba(217, 217, 217, 1)',
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginTop: '-10px'  // Moves logo higher
                                }}
                            >
                                <span className="text-secondary">Company Logo</span>
                            </div>

                            {/* Job Details */}
                            <div className="flex-grow-1 ms-md-4 mt-3 mt-md-0 text-center text-md-start">
                                <h4 className="text-primary fw-bold">Software Engineer</h4>
                                <h6 className="text-dark">TCS (Tata Consultancy Services)</h6>
                                <p className="text-muted mb-1">📍 Chennai, Tamil Nadu</p>
                                <p className="text-muted mb-2">🏡 Hybrid (2 Days Work from Home)</p>

                                <p><span className="fw-bold text-primary">Location:</span> Chennai, Tamil Nadu</p>
                                <p><span className="fw-bold text-primary">Work Mode:</span> Hybrid (On-site + Work from Home)</p>
                                <p><span className="fw-bold text-primary">Salary Range:</span> ₹6 LPA - ₹10 LPA</p>
                                <p><span className="fw-bold text-primary">Benefits:</span> Health Insurance, Provident Fund (PF), Paid Leaves, Annual Bonus</p>
                            </div>

                            {/* Application Deadline (Top-Right on Larger Screens) */}
                            <div className="position-absolute top-0 end-0 mt-2 me-3 text-end">
                                <h6 className="text-primary">Application Deadline</h6>
                                <p className="text-danger fw-bold">⏳ Apply Before: March 15, 2025</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* -------------------------------------------------------------------------------------------- */}

            {/* input section */}



            <div class="container mt-5">
                <div class="card p-4 shadow">
                    <h3 class="text-primary">Personal Information</h3>
                    <form>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label">Full Name</label>
                                <input type="text" class="form-control" placeholder="Enter your full name" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Email Address</label>
                                <input type="email" class="form-control" placeholder="Enter your email" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Phone Number</label>
                                <input type="text" class="form-control" placeholder="Enter your phone number" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Current Employment Status</label>
                                <select class="form-select">
                                    <option selected>Select your status</option>
                                    <option>Employed</option>
                                    <option>Unemployed</option>
                                    <option>Freelancer</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">LinkedIn/Portfolio</label>
                                <input type="text" class="form-control" placeholder="Enter profile link" />
                            </div>

                            {/* <div class="col-md-6">
                                <label class="form-label">Upload Resume</label>
                                <input type="file" class="form-control" />
                            </div> */}



                            <div class="col-md-6">
                                <label class="form-label">Upload Resume</label>
                                <div class="input-group">
                                    <input type="file" class="form-control custom-file-input" id="resumeUpload" />
                                    <label class="input-group-text btn btn-primary" for="resumeUpload">📂</label>
                                </div>
                            </div>


                            <div class="col-md-6">
                                <label class="form-label">Current Company’s Name</label>
                                <input type="text" class="form-control" placeholder="Enter company name" />
                            </div>

                            <div class="col-md-6 ">
                                <label class="form-label">Total Years of Experience</label>
                                <input type="number" class="form-control  " placeholder="Enter years of experience" />
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Key Skills & Expertise</label>
                                <input type="text" class="form-control" placeholder="Enter key skills" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Expected Salary</label>
                                <input type="text" class="form-control" placeholder="Enter expected salary" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Notice Period</label>
                                <input type="text" class="form-control" placeholder="Enter notice period" />
                            </div>
                            <div class="col-12">
                                <label class="form-label">Why do you want to work with us?</label>
                                <textarea class="form-control" rows="3" placeholder="Enter your response"></textarea>
                            </div>

                            <div class="col-12 d-flex align-items-center justify-content-between">
                                <input class="form-check-input me-2" type="checkbox" id="terms" />
                                <label class="form-check-label" for="terms">I agree to the Terms & Conditions.</label>
                            </div>

                            <div class="col-12 text-center">
                                <button className="btn btn-custom "> <Link to="/" className="text-decoration-none text-white d-block w-100 text-center">  Apply Now  </Link> </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>







        </div>
    );
};

export default Jobapplypage;
