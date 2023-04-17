import React from "react";
import "./EmployeeCard.scss";
import Counter from "../Counter/Counter";

const EmployeeCard = () => {
  return (
    <div className="employee-card">
      <div className="person">
        <h3>Name</h3>
        <h4>Role</h4>
      </div>
      <section>
        <Counter />
      </section>
    </div>
  );
};

export default EmployeeCard;
