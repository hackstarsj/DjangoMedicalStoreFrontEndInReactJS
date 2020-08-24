import React from "react";

class HomeComponent extends React.Component {
  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>DASHBOARD</h2>
          </div>

          <div className="row clearfix">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-pink hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">playlist_add_check</i>
                </div>
                <div className="content">
                  <div className="text">NEW TASKS</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="125"
                    data-speed="15"
                    data-fresh-interval="20"
                  >
                    125
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-cyan hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">help</i>
                </div>
                <div className="content">
                  <div className="text">NEW TICKETS</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="257"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    257
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-light-green hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">forum</i>
                </div>
                <div className="content">
                  <div className="text">NEW COMMENTS</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="243"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    243
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-orange hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">person_add</i>
                </div>
                <div className="content">
                  <div className="text">NEW VISITORS</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="1225"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    1225
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeComponent;
