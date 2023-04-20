// Main.jsx
import React from "react";
import "./Main.scss";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const Main = ({ team }) => {
  return (
    <div className="Main">
      {team.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default Main;
