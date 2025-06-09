import "../manage.css";
import Sidebar from "../Common/Sidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"

function Manage() {

  let [employees, setEmployees] = useState([]);
  useEffect(() => {
    FetchEmployees();
  }, []);

  async function FetchEmployees() {
    await axios.get("http://localhost:8000/employee").then((response) => {
      console.log(response);
      setEmployees(response.data.employee);
    });
  }

  console.log(employees);

  async function deleteEmployee(id) {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8000/deleteemployee/${id}`).then((response) => {
          if(response.data.success) {
            toast.success(response.data.message, {
              onClose: () => {
                FetchEmployees();
              },
            });
          }
        });
    } catch (e) {
      toast.error("Some Error Occured");
      console.log(e)
    }
  }
  return (
    <>
      <div>
        <div className="wrapper">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <div className="content">
            <h2 className="mb-4">Manage Employees</h2>
            {employees.map((value) => {
              return (
                <>
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">
                        Email: {value.email}
                        <br />
                        Position: {value.position}
                      </p>
                    </div>
                    <div className="action-buttons p-3 ml-auto">
                      <Link to="/edit" state={value} className="btn btn-sm btn-warning">
                        Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          deleteEmployee(value._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;
