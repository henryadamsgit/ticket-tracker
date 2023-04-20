// App.jsx
import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import team from "./assets/data/team";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Input">
        <h4>Search By Name:</h4> <input className="Input__Name" type="search" />
        <h4>Search By Role:</h4> <select className="Input__Role" type="text" />
      </div>
      <Main team={team} />
    </div>
  );
}

export default App;
