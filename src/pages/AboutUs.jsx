import React from 'react'
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import abouthero from '../img/About-img/about_hero.png'
import nav_logo from '../img/About-img/nav_logo.png'
import main from '../img/About-img/main.png'
import aboutfooter from '../img/About-img/about_footer.png'

import howitwork1 from '../img/About-img/howitwork1.png'
import howitwork2 from '../img/About-img/howitwork2.png'
import howitwork3 from '../img/About-img/howitwork3.png'
import howitwork4 from '../img/About-img/howitwork4.png'

import footer from '../img/About-img/about_footer.png'

const AboutUs = () => {
  // card section
  const steps = [
    {
      title: "Login & Create a Profile",
      description: "Upload your resume & set preferences",
      image: howitwork1,
    },
    {
      title: "Search for Jobs",
      description: "Browse by category, location, or industry",
      image: howitwork2,
    },
    {
      title: "Apply Instantly",
      description: "One-click application to relevant jobs",
      image: howitwork3,
    },
    {
      title: "Get Hired",
      description: "Track application status and receive interview invites",
      image: howitwork4,
    },
  ];



  // about last secation 

  const jobFeatures = [
    {
      title: "Wide Range of Job Listings",
      description: "Find jobs across industries.",
    },
    {
      title: "Easy Application Process",
      description: "One-click apply feature.",
    },
    {
      title: "Verified Employers",
      description: "Trusted companies and job postings.",
    },
    {
      title: "Job Alerts & Notifications",
      description: "Stay updated on new opportunities.",
    },
    {
      title: "Resume Builder & Profile Optimization",
      description: "Find jobs across industries.",
    },
    {
      title: "Wide Range of Job Listings",
      description: "Increase hiring chances.",
    },
  ];













  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-light about_hero_text py-5">
        <div className="container">
          <div className="row align-items-center about-shadow ">
            <div className="col-lg-6  text-center text-lg-start">
              <h2 className="fw-bold">Connecting Talent with Opportunity</h2>

              <p className="fs-5 text-center text-lg-start mx-auto ms-lg-5" style={{ maxWidth: '518px' }}>
                "HRIFY Jobs is a job hiring platform where companies post vacancies and candidates apply for their dream jobs effortlessly."
              </p>


              <div className="d-flex flex-column flex-sm-row align-items-center align-items-lg-start justify-content-center justify-content-lg-start">
                <button className="btn hero-btn mb-2 mb-sm-0 me-sm-2">Explore Jobs</button>
                <button className="btn hero-btn">Post a Job</button>
              </div>


            </div>
            <div className="col-lg-6 text-center mt-5  mt-lg-3">
              <img
                src={abouthero}
                alt="Job Hiring Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <nav class="breadcrumb ms-2 mt-3 mx-5">
          <span class="breadcrumb-item active">  Home</span>
          <a class="breadcrumb-item" href="#">About Us</a>

        </nav>
      </div>




      {/* Logo and Slogan */}
      <div className="container-fluid bg-light  ">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-6 col-sm-6">
              <h2 className="fw-medium  fs-4 d-flex d-lg-block flex-column align-items-center">
                <img src={nav_logo} style={{ width: 151 }} alt="HRIFY Logo" className="" />
                <span>-Your Gateway to Seamless Hiring & Career Growth</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* About HRIFY Jobs */}
      <div className="container  Hiring_Career ">
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold">HRIFY Jobs</h2>
            <p className="lead fs-4 mt-5">
              <strong>HRIFY Jobs</strong> is a dynamic <strong>job portal</strong> designed to bridge the gap between{" "}
              <strong>employers and job seekers</strong> by providing a seamless and efficient hiring experience. It serves as a{" "}
              <strong>one-stop destination</strong> where companies can <strong>post job vacancies</strong> and talented professionals can{" "}
              <strong>explore, apply, and secure opportunities</strong> that align with their skills and career goals.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="row my-4">
          <div className="col-12">
            <p className="fs-5">
              An intuitive interface and powerful features such as <strong>one-click applications, job alerts, resume optimization, and verified employer listings</strong>,{" "}
              HRIFY Jobs ensures that job seekers connect with the right opportunities effortlessly. Employers benefit from a{" "}
              <strong>streamlined hiring process</strong>, allowing them to find and recruit the best talent quickly and efficiently.
            </p>
          </div>
        </div>

        {/* Job Types Section */}
        <div className="row ">
          <div className="col-12">
            <p className="fs-5">
              HRIFY Jobs caters to a wide range of industries, offering <strong>full-time, part-time, freelance, internship, remote, and contract-based jobs</strong>{" "}
              to suit the needs of modern professionals. Whether you're a fresher looking for your first job, an experienced candidate seeking career growth, or an employer looking for skilled professionals,{" "}
              <strong>HRIFY Jobs empowers you with the right tools to achieve success.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className=" model_img d-flex justify-content-center align-items-center ">
        <img className="img-fluid w-75 w-md-75 my-1" src={main} alt="" />
      </div>

      {/* How It Works */}
      <div className="container text-center my-1 mt-5">
        <h2 className="mb-4 text-primary">How It Works</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className=" col-lg-3 col-md-6 col-sm-1 my-2 mb-5">
              <div className="card  h-100 shadow-lg">
                <img src={step.image} alt={step.title} className="card-img-top img-fluid p-3" />
                <div className="card-body">
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose HRIFY Jobs */}


      <div className="container-fuild justify-content-center">





        <div className="container my-1 p-4  ">
          <div className="row align-items-center justify-content-md-center   about-shadow  accordion">
            {/* Left Content */}
            <div className="col-lg-6    mb-4 fs-4">



              <div className="container mt-4  ">
                <h2 className="Jobs_head text-start  ">Why Choose HRIFY Jobs?</h2>
                <div className="list-group mt-1  ">
                  {jobFeatures.map((feature, index) => (
                    <div key={index} className=" d-flex align-items-start lh-base" style={{ pointerEvents: "none" }}>
                      <span className="badge question_btn me-2 rounded-circle">?</span>
                      <div className=''>
                        <h5 className="fw-bold text-start">{feature.title}</h5>
                        <p className="mb-0 text-body-tertiary text-start fs-5">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>












            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-12 text-center ">
              <img
                src={aboutfooter}
                alt="Illustration showcasing job search features"
                className="img-fluid rounded  p-2"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>


      </div>
























    </div>
  );
};

export default AboutUs;
