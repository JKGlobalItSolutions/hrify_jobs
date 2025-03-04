import React, { useState } from 'react'
import job from "../img/Favorites-img/OBJECTS.png";
import img1 from "../img/Favorites-img/Frame 1732.png";

const Favorites = ( ) => {

  const [Favorites, setFavorites] = useState(false);
  

  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [isExpirationEnabled, setIsExpirationEnabled] = useState(false);

  const handleReset = () => {
    setJobType("");
    setLocation("");
    setExpirationDate("");
    setIsExpirationEnabled(false);
  };


  return (
    <div>





      <div className="container-fiuld ">
        <div className="row justify-content-center gap-3">


          <section className="container-fluid Favorites-hero text-white d-flex align-items-center justify-content-center  text-center">
            <div className="container">
              <h1 className="display-4 fw-bold d-inline-block" >Favorites</h1>

            </div>
          </section>






          <div className="col-lg-12 col-sm-6 col-md-6 div position-relative">
            <button data-bs-toggle="modal">
              <img
                className="w-full opt-btn position-absolute"  onClick={()=> setFavorites(true)} 
                style={{
                  top: '10px',
                  right: window.innerWidth >= 992 ? '180px' : '50px',
                }}
                src={img1}
                alt=""
              />
            </button>
          </div>





          {
                Favorites ? (

          <div  className="modal show opcations d-block"   style={{
            maxWidth: "90%",
            width: "388px",
            height: "auto",
            borderRadius: "10px",
            margin: "auto"

          }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-3">
                <button type='btn ' className="btn-close ms-auto  "  onClick={()=> setFavorites(false)}></button>
                <div className="mb-3 d-flex flex-column flex-md-row gap-3">
                  <label className="form-label  w-50">Job Type</label>
                  <input
                    type="text"
                    className="form-control w-100 w-md-50"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                  />
                </div>
                <div className="mb-3 d-flex flex-column flex-md-row gap-3">
                  <label className="form-label w-50">Location</label>
                  <input
                    type="text"
                    className="form-control w-100 w-md-50"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="mb-3 d-flex flex-column flex-md-row gap-3">
                  <label className="form-label w-50 mt-2">Expiration Date</label>
                  <input
                    type="date"
                    className="form-control w-100 h-50 w-md-50"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    disabled={!isExpirationEnabled}
                  />
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label className="form-check-label">Enable Expiration Date</label>
                  <div className="form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={isExpirationEnabled}
                      onChange={() => setIsExpirationEnabled(!isExpirationEnabled)}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center flex-md-row gap-3 my-3">
                  <button className="btn text-white" style={{
                    width: "121px",
                    height: "41px",
                    borderRadius: "4px",
                    background: "linear-gradient(180deg, #0080A7 0%, #003241 100%)",
                  }}>
                    Show Result
                  </button>
                  <button className="btn text-white" style={{
                    width: "121px",
                    height: "41px",
                    borderRadius: "4px",
                    background: "rgba(255, 0, 0, 1)",
                  }} onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
                ): null
              
              }






























          {/*  */}

          {true ?
            (


              <div className="row justify-content-center gap-3">




                {[
                  {
                    title: "Heavy Vehicle Mechanic",
                    type: "Full Time",
                    company: "Tyre Shop",
                    location: "Virudhunagar, Tamil Nadu",
                    salary: "₹10,000",
                    gender: "Male"
                  },
                  {
                    title: "Software Developer",
                    type: "Full Time",
                    company: "Tyre Shop",
                    location: "Virudhunagar, Tamil Nadu",
                    salary: "₹50,000",
                    gender: "Any"
                  },
                  {
                    title: "Delivery Executive",
                    type: "Full Time",
                    company: "FastTrack Logistics",
                    location: "Kanyakumari, Tamil Nadu",
                    salary: "₹12,000",
                    gender: "Male"
                  },
                  {
                    title: "Customer Support Executive",
                    type: "Full Time",
                    company: "CallConnect Solutions",
                    location: "Thanjavur, Tamil Nadu",
                    salary: "₹20,000",
                    gender: "Male"
                  },
                  {
                    title: "Data Entry Operator",
                    type: "Full Time",
                    company: "Speedy Data Services",
                    location: "Vellore, Tamil Nadu",
                    salary: "₹15,000",
                    gender: "Male"
                  },
                  {
                    title: "Graphic Designer",
                    type: "Full Time",
                    company: "Creative Minds",
                    location: "Tiruppur, Tamil Nadu",
                    salary: "₹25,000",
                    gender: "Male"
                  },
                  {
                    title: "Accountant",
                    type: "Full Time",
                    company: "Finance Hub Pvt Ltd",
                    location: "Erode, Tamil Nadu",
                    salary: "₹30,000",
                    gender: "Male/Female"
                  },
                  {
                    title: "Civil Engineer",
                    type: "Full Time",
                    company: "BuildRight Constructions",
                    location: "Salem, Tamil Nadu",
                    salary: "₹40,000",
                    gender: "Male"
                  },



                ]
                  .map((job, index) => (
                    <div key={index} className="col-lg-5 col-md-5 col-sm-6 mt-5">




                      <div className="card shadow-lg bg-white rounded position-relative  py-2">
                        <button className="btn-close mt-1 position-absolute" style={{ top: '10px', right: '10px' }} aria-label="Close"></button>
                        <div className="card-body text-center mt-4">
                          <div className="d-flex justify-content-center mb-3">
                            <div className="rounded-circle d-flex align-items-center justify-content-center"
                              style={{ width: '171px', height: '171px', backgroundColor: 'rgba(217, 217, 217, 1)' }}>
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
                            <div className="ms-3 ">
                              <p className="mb-1">{job.title}</p>
                              <p className="mb-1">{job.type}</p>
                              <p className="mb-1">{job.company}</p>
                              <p className="mb-1">{job.location}</p>
                              <p className="mb-1">{job.salary}</p>
                              <p className="mb-1">{job.gender}</p>
                            </div>
                          </div>

                        </div>
                        <span className="badge position-absolute Expiry p-2" style={{ top: '365px', right: '10px' }}>Expiry in <br /> 10 Days</span>
                        <div className="d-flex">
                          <button className="btn flex-grow-1 text-white" style={{ backgroundColor: '#00799e', borderRadius: '0 0 0 10px', padding: '12px', fontWeight: 'bold' }}>View Job</button>
                          <button className="btn btn-dark flex-grow-1" style={{ borderRadius: '0px', padding: '12px', fontWeight: 'bold' }}>Apply Now</button>
                          <button className="btn btn-light border flex-grow-1" style={{ borderRadius: '0 0 10px 0', padding: '12px', fontWeight: 'bold' }}>Remove</button>
                        </div>
                      </div>
                    </div>
                  )
                  )
                }

              </div>

            ) :


            (

              <div className="container d-flex flex-column align-items-center justify-content-center text-center min-vh-100">
                <div className="row">
                  <div className="col-12">
                    <img
                      src={job}
                      alt="No saved jobs"
                      className="img-fluid"
                      style={{ maxWidth: "300px" }}
                    />
                  </div>
                </div>
                <h5 className="mt-3 text-secondary">
                  "You haven’t saved any jobs yet"
                </h5>
                <p className="text-muted">Start exploring and save jobs for later!</p>

              </div>

            )}

        </div>
      </div>




















    </div>
  )
}

export default Favorites