import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#" className="bars" onClick={this.props.onBarClick}></a>
            <a className="navbar-brand" href="index.html">
              Medical Store Management System
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
