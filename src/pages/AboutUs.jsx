import React from 'react'
import { Container, Row, Col, ListGroup } from "react-bootstrap";


import abouthero from '../img/About-img/about_hero.png'
import nav_logo from '../img/About-img/nav_logo.png'
import main from '../img/About-img/main.png'
// card-img

// import howitwork1 from '../img/About-img/howitwork1.png'
// import howitwork2 from '../img/About-img/howitwork2.png'
// import howitwork3 from '../img/About-img/howitwork3.png'
// import howitwork4 from '../img/About-img/howitwork4.png'
import footer from '../img/About-img/about_footer.png'
const AboutUs = () => {
  return (
    <div>








      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row align-items-center about-shadow">
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="fw-bold">Connecting Talent with Opportunity</h2>
              <p className="text-muted fs-5" style={{ width: 518 }}>
                "HRIFY Jobs is a job hiring platform where companies post vacancies and candidates apply for their dream jobs effortlessly."
              </p>
              <div>
                <button className="btn btn-primary me-2">Explore Jobs</button>
                <button className="btn btn-primary">Post a Job</button>
              </div>
            </div>
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={abouthero}
                alt="Job Hiring Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>












      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <h2 className="fw-medium about_hero_text fs-4 d-flex d-lg-block flex-column align-items-center">
                <img src={nav_logo} style={{ width: 151 }} alt="" className="mb-2" />
                <span>-Your Gateway to Seamless Hiring & Career Growth</span>
              </h2>
            </div>
          </div>
        </div>
      </div>






      <div className="container my-5">
        {/* Header Section */}
        <div className="row">
          <div className="col-12">
            <h2 className="fw-bold ">HRIFY Jobs</h2>
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
            <p className='fs-4'>
              An intuitive interface and powerful features such as <strong>one-click applications, job alerts, resume optimization, and verified employer listings</strong>,{" "}
              HRIFY Jobs ensures that job seekers connect with the right opportunities effortlessly. Employers benefit from a{" "}
              <strong>streamlined hiring process</strong>, allowing them to find and recruit the best talent quickly and efficiently.
            </p>
          </div>
        </div>

        {/* Job Types Section */}
        <div className="row">
          <div className="col-12">
            <p className='fs-4'>
              HRIFY Jobs caters to a wide range of industries, offering <strong>full-time, part-time, freelance, internship, remote, and contract-based jobs</strong>{" "}
              to suit the needs of modern professionals. Whether you're a fresher looking for your first job, an experienced candidate seeking career growth, or an employer looking for skilled professionals,{" "}
              <strong>HRIFY Jobs empowers you with the right tools to achieve success.</strong>
            </p>
          </div>
        </div>
      </div>




      <img className="img-fluid  " src={main} alt="" />
    
    


      {/* <div class="card-container">
  <div class="card">
    <img src={howitwork1} alt="Image 1"/>
    <h3>Card Title 1</h3>
    <p>This is a description for the first card.</p>
  </div>
  <div class="card">
    <img src={howitwork2} alt="Image 2"/>
    <h3>Card Title 2</h3>
    <p>This is a description for the second card.</p>
  </div>
  <div class="card">
    <img src={howitwork3} alt="Image 3"/>
    <h3>Card Title 3</h3>
    <p>This is a description for the third card.</p>
  </div>
  <div class="card">
    <img src={howitwork4} alt="Image 4"/>
    <h3>Card Title 4</h3>
    <p>This is a description for the fourth card.</p>
  </div>
</div> */}








      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <h2 className="text-primary">Why Choose HRIFY Jobs?</h2>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>✅ Wide Range of Job Listings</strong><br />Find jobs across industries.</ListGroup.Item>
              <ListGroup.Item><strong>✅ Easy Application Process</strong><br />One-click apply feature.</ListGroup.Item>
              <ListGroup.Item><strong>✅ Verified Employers</strong><br />Trusted companies and job postings.</ListGroup.Item>
              <ListGroup.Item><strong>✅ Job Alerts & Notifications</strong><br />Stay updated on new opportunities.</ListGroup.Item>
              <ListGroup.Item><strong>✅ Resume Builder & Profile Optimization</strong><br />Enhance your hiring chances.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6} className="text-center">
            <img src={footer} alt="HRIFY Illustration" className="img-fluid" />
          </Col>
        </Row>
      </Container>







    </div>
  )
}

export default AboutUs