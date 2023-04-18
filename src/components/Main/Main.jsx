import React from "react";
import "./Main.scss";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import team from "../../assets/data/team";

const Main = () => {
  return (
    <div className="Main">
      <EmployeeCard employee={team[0]} />
      <EmployeeCard employee={team[1]} />
      <EmployeeCard employee={team[2]} />
      <EmployeeCard employee={team[3]} />
      <EmployeeCard employee={team[4]} />
      <EmployeeCard employee={team[5]} />
      <EmployeeCard employee={team[6]} />
      <EmployeeCard employee={team[7]} />
      <EmployeeCard employee={team[8]} />
      <EmployeeCard employee={team[9]} />
    </div>
  );
};

export default Main;
