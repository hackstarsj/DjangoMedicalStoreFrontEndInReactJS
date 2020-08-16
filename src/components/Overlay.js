import React from "react";

class Overlay extends React.Component {
  render() {
    return (
      <div className="overlay" style={{ display: this.props.display }}></div>
    );
  }
}

export default Overlay;
