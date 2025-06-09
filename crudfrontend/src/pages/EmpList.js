import '../index.css';
import Sidebar from "../Common/Sidebar";
import { useEffect, useState } from 'react';
import axios from "axios";

function EmpList() {
  let [employee, setEmployee] = useState([]);

  async function FetchEmployeeData() {
    try {
      await axios.get("http://localhost:8000/employee").then((response) => {
        console.log(response.data);
        setEmployee(response.data["employee"]);
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchEmployeeData();
  }, []);

  return (
    <div>
      <div className="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="content">
          <h2 className="mb-4">All Employees</h2>
          {
            employee.map((value) => {
              return (
                <>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Name : {value.name}</h5>
                      <p className="card-text">
                        Email : {value.email}
                        <br />
                        Position : {value.position}              </p>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default EmpList;
