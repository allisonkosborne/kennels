import React from "react";
import "./EmployeeCard.css";

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-employeename">
          {employee.name}
        </span></h3>
        <p>Address: {employee.address}</p>
        <p>Location: {employee.location}</p>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>
      </div>
    </div>
  );
}