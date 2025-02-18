import React from 'react'
import '../stylesheet/addjobpost.css'

const Addjobpost = () => {
  return (
    <div>

      <div class="container my-4">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="form-container">
              <div class="form-title ">Post a Job & Find the Right Talent!</div>
              <form>
                <div class="row g-3 mt-3">
                  <div class="col-md-4">
                    <label class="form-label">Job Title</label>
                    <input type="text" class="form-control" placeholder="Enter Job Title" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Job Type</label>
                    <input type="text" class="form-control" placeholder="Enter Job Type" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Select Job*</label>
                    <input type="text" class="form-control" placeholder="Select Job" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Gender</label>
                    <input type="text" class="form-control" placeholder="Enter Gender" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Job Qualification</label>
                    <input type="text" class="form-control" placeholder="Enter Qualification" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Job Description</label>
                    <input type="text" class="form-control" placeholder="Enter Description" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Minimum Salary</label>
                    <input type="text" class="form-control" placeholder="Enter Min Salary" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Maximum Salary</label>
                    <input type="text" class="form-control" placeholder="Enter Max Salary" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Working Time Start</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Working Time End</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Company Category</label>
                    <input type="text" class="form-control" placeholder="Enter Company Category" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Company Name</label>
                    <input type="text" class="form-control" placeholder="Enter Company Name" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Mobile Number</label>
                    <div class="input-group">
                      <span class="input-group-text">+91</span>
                      <input type=" text" class="form-control" placeholder="Enter Mobile Number" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">WhatsApp Number</label>
                    <div class="input-group">
                      <span class="input-group-text">+91</span>
                      <input type="text" class="form-control" placeholder="Enter WhatsApp Number" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="Enter Email" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Company Location</label>
                    <input type="text" class="form-control" placeholder="Enter Location" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Company Address</label>
                    <input type="text" class="form-control" placeholder="Enter Address" />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Create Password</label>
                    <div class="input-group">
                      <input type="password" class="form-control" placeholder="Enter Password" />
                      <span class="input-group-text">
                        <i class="bi bi-eye"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <button type="submit" class="btn btn-custom">Job Post & Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Addjobpost