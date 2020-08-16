import React from "react";
import usericon from "adminbsb-materialdesign/images/user.png";

class Sidebar extends React.Component {
  state = {
    defaultClass: "btn-group user-helper-dropdown",
  };

  constructor(props) {
    super(props);
    this.divref = React.createRef();
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleMouseClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseClick, false);
  }

  handleMouseClick = (event) => {
    console.log("ok");
    if (event.target === this.divref.current) {
      return;
    } else {
      this.setState({ defaultClass: "btn-group user-helper-dropdown" });
    }
  };

  showLogoutMenu = () => {
    if (this.state.defaultClass == "btn-group user-helper-dropdown") {
      this.setState({ defaultClass: "btn-group user-helper-dropdown open" });
    } else {
      this.setState({ defaultClass: "btn-group user-helper-dropdown" });
    }
  };

  render() {
    return (
      <section>
        <aside id="leftsidebar" className="sidebar">
          <div className="user-info">
            <div className="image">
              <img src={usericon} width="48" height="48" alt="User" />
            </div>
            <div className="info-container">
              <div
                className="name"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SuperCoders
              </div>
              <div className="email">supercoders.tech@gmail.com</div>
              <div className={this.state.defaultClass}>
                <i
                  className="material-icons"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={this.showLogoutMenu}
                  ref={this.divref}
                >
                  keyboard_arrow_down
                </i>
                <ul className="dropdown-menu pull-right">
                  <li>
                    <a
                      href="javascript:void(0);"
                      className=" waves-effect waves-block"
                    >
                      <i className="material-icons">input</i>Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="menu">
            <div
              className="slimScrollDiv"
              style={{
                position: "relative",
                overflow: "hidden",
                width: "auto",
                height: "57px",
              }}
            >
              <ul
                className="list"
                style={{ overflow: "hidden", width: "auto", height: "57px" }}
              >
                <li className="active">
                  <a
                    href="index.html"
                    className="toggled waves-effect waves-block"
                  >
                    <i className="material-icons">home</i>
                    <span>Home</span>
                  </a>
                </li>
              </ul>
              <div
                className="slimScrollBar"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  width: "4px",
                  position: "absolute",
                  top: "0px",
                  opacity: "0.4",
                  display: "none",
                  borderRadius: "0px",
                  zIndex: "99",
                  right: "1px",
                  height: "30px",
                }}
              ></div>
              <div
                className="slimScrollRail"
                style={{
                  width: "4px",
                  height: "100%",
                  position: "absolute",
                  top: "0px",
                  display: "none",
                  borderRadius: "0px",
                  background: "rgb(51, 51, 51)",
                  opacity: "0.2",
                  zIndex: "90",
                  right: "1px",
                }}
              ></div>
            </div>
          </div>

          <div className="legal">
            <div className="copyright">
              © 2020 - 2021{" "}
              <a href="javascript:void(0);">
                SuperCoders - Medical Store Management System
              </a>
              .
            </div>
            <div className="version">
              <b>Version: </b> 1.0.5
            </div>
          </div>
        </aside>
      </section>
    );
  }
}

export default Sidebar;
