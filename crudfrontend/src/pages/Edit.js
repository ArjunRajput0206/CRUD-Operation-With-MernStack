import React, { useState } from "react";
import Sidebar from "../Common/Sidebar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Edit() {
  let employeedata = useLocation().state;
  let [employee, setemployee] = useState(employeedata);
  console.log(employee);

  function handleInputChange(e) {
    let {name, value} = e.target;
    setemployee((prev) => ({
      ...prev,
      [name] : value,
    }));
  }

  async function handlesubmit(e) {
    try{
      e.preventDefault();
      await axios
      .put("http://localhost:8000/updateemployee", employee)
      .then((response) => {
        if(response.data.success) {
          toast.success("Data Updated Successfully", {
            onClose: () => {
              window.location.href = "/manage";
            },
          });
        }
      });
    }catch (e) {
      toast.error("Data not updated")
    }
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
              <h2>Edit Employee</h2>
              <form method="post" onSubmit={handlesubmit}>
                <input type="hidden" name="id" defaultValue={1} />

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    defaultValue={employee.name}
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
                    defaultValue={employee.email}
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
                    defaultValue={employee.phone}
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
                    defaultValue={
                      employee.dob
                      ? new Date(employee.dob).toISOString().slice(0,10)
                      : "1990-01-01"
                    }
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <br />
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      id="male"
                      defaultValue={employee.gender === "male"}
                      onChange={handleInputChange}
                      defaultChecked
                    />
                    <label htmlFor="male"> Male </label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      id="female"
                      defaultValue={employee.gender === "female"}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="female"> Female </label>
                    &nbsp;&nbsp;
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      id="other"
                      defaultValue={employee.gender === "other"}
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
                    defaultValue={employee.position}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <select
                    className="form-control"
                    name="department"
                    id="department"
                    defaultValue={employee.department}
                    onChange={handleInputChange}
                  >
                    <option value={employee.department}>
                      {employee.department}
                    </option>
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
                    defaultValue={
                      employee.doj
                      ? new Date(employee.doj).toISOString().slice(0,10)
                      : "1990-01-01"
                    }
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    className="form-control"
                    name="address"
                    id="address"
                    rows="3"
                    defaultValue={employee.address}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="profile">Profile Picture URL</label>
                  <input
                    type="url"
                    className="form-control"
                    name="profile"
                    id="profile"
                    placeholder="https://example.com/image.jpg"
                    defaultValue={employee.profile}
                    onChange={handleInputChange}
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Update Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
