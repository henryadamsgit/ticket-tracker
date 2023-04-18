import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = (props) => {
  return (
    <div className="employee-card">
      <div className="person">
        <h3>{props.employee.name}</h3>
        <h5>{props.employee.role}</h5>
      </div>
      <section>
        <Counter />
      </section>
    </div>
  );
};

export default EmployeeCard;
