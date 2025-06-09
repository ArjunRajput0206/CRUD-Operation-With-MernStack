import { useState } from "react";
import "../add.css";
import Sidebar from "../Common/Sidebar";
import axios from "axios";


function Add() {
  let [employee,setemployee] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    position: "",
    department: "",
    doj: "",
    address: "",
    profile: ""
  });

  async function handlesubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8000/addemployee", employee).then((response)=>{
      console.log(response.data.message);
    })
  }
  function handleInputChange(e) {
  const { name, value } = e.target;
  setemployee((prevEmployee) => ({
    ...prevEmployee,
    [name]: value,
  }));
}

  return (

    <>
      <div>
        <div className="d-flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="content">
            <div className="form-container">
              <h2>Add Employee</h2>
              <form method="post" onSubmit={handlesubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    id="dob"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <br />
                  <div>
                    <input type="radio" name="gender" value="Male" id="male"  onChange={handleInputChange}/>
                    <label htmlFor="male"> Male </label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      id="female"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="female"> Female </label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      id="other"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="other"> Other </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    className="form-control"
                    name="position"
                    id="position"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <select
                    className="form-control"
                    name="department"
                    id="department"
                    onChange={handleInputChange}
                  >
                    <option value="">Select Department</option>
                    <option value="HR">HR</option>
                    <option value="Development">Development</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="doj">Joining Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="doj"
                    id="doj"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="form-control"
                    name="address"
                    id="address"
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="profile_pic">Profile Picture URL</label>
                  <input
                    type="url"
                    className="form-control"
                    name="profile"
                    id="profile"
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Add Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;