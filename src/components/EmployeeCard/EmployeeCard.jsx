// EmployeeCard.jsx
import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className="person">
        <h3>{employee.name}</h3>
        <h5>{employee.role}</h5>
      </div>
      <section>
        <Counter />
      </section>
    </div>
  );
};

export default EmployeeCard;
