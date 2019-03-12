import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Header = () => {
  return <div className="header">LUXETTE</div>;
};

const Landing = () => {
  return (
    <div className="title">
      Your destination bachelorette, without the stress of planning it.
    </div>
  );
};

const MainAction = () => {
  return <button className="main-action">See experiences</button>;
};
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <MainAction />
      </div>
    );
  }
}

export default App;
