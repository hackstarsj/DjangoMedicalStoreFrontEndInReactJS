import React from "react";
import APIHandler from "../utils/APIHandler";
import CanvasJSReact from "../utils/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class HomeComponent extends React.Component {
  //This Method Work When Our Page is Ready
  constructor(props) {
    super(props);
    this.chart = React.createRef();
  }

  state = {
    customer_request: 0,
    bill_count: 0,
    medicine_count: 0,
    company_count: 0,
    employee_count: 0,
    profit_total: 0,
    sell_total: 0,
    request_pending: 0,
    request_completed: 0,
    profit_amt_today: 0,
    sell_amt_today: 0,
    medicine_expire_serializer_data: 0,
    dataPoints: [],
    profitChartOption: {},
    sellChartOption: {},
  };

  componentDidMount() {
    this.fetchHomePage();
  }

  async fetchHomePage() {
    var apihandler = new APIHandler();
    var homedata = await apihandler.fetchHomePage();
    console.log(homedata);
    this.setState({ customer_request: homedata.data.customer_request });
    this.setState({ bill_count: homedata.data.bill_count });
    this.setState({ medicine_count: homedata.data.medicine_count });
    this.setState({ company_count: homedata.data.company_count });
    this.setState({ employee_count: homedata.data.employee_count });
    this.setState({ profit_total: homedata.data.profit_total });
    this.setState({ sell_total: homedata.data.sell_total });
    this.setState({ request_pending: homedata.data.request_pending });
    this.setState({ request_completed: homedata.data.request_completed });
    this.setState({ sell_amt_today: homedata.data.sell_amt_today });
    this.setState({ profit_amt_today: homedata.data.profit_amt_today });
    this.setState({
      medicine_expire_serializer_data:
        homedata.data.medicine_expire_serializer_data,
    });

    var profitdatalist = [];
    for (var i = 0; i < homedata.data.profit_chart.length; i++) {
      profitdatalist.push({
        x: new Date(homedata.data.profit_chart[i].date),
        y: homedata.data.profit_chart[i].amt,
      });
    }
    var selldatalist = [];
    for (var i = 0; i < homedata.data.sell_chart.length; i++) {
      selldatalist.push({
        x: new Date(homedata.data.sell_chart[i].date),
        y: homedata.data.sell_chart[i].amt,
      });
    }

    this.state.profitChartOption = {
      animationEnabled: true,
      title: {
        text: "Total Profit Chart of Medicine",
      },
      axisX: {
        valueFormatString: "DD MMMM YYYY",
      },
      axisY: {
        title: "Profit ",
        prefix: "$",
      },
      data: [
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "DD MMMM YYYY",
          type: "spline",
          dataPoints: profitdatalist,
        },
      ],
    };
    this.state.sellChartOption = {
      animationEnabled: true,
      title: {
        text: "Total Sell Chart of Medicine",
      },
      axisX: {
        valueFormatString: "DD MMMM YYYY",
      },
      axisY: {
        title: "Sales ",
        prefix: "$",
      },
      data: [
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "DD MMMM YYYY",
          type: "spline",
          dataPoints: selldatalist,
        },
      ],
    };
    this.setState({});
  }

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
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TOTAL REQUEST</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="125"
                    data-speed="15"
                    data-fresh-interval="20"
                  >
                    {this.state.customer_request}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-cyan hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TOTAL SALES</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="257"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.bill_count}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-light-green hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TOTAL MEDICINES</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="243"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.medicine_count}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-orange hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TOTAL COMPANY</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="1225"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.company_count}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-pink hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TOTAL EMPLOYEE</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="125"
                    data-speed="15"
                    data-fresh-interval="20"
                  >
                    {this.state.employee_count}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-cyan hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TOTAL PROFIT</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="257"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.profit_total}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-light-green hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TOTAL SALES AMOUNT</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="243"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.sell_total}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-orange hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">MEDICINE EXPIRE IN WEEK</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="1225"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.medicine_expire_serializer_data}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-pink hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">COMPLETED REQUEST</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="125"
                    data-speed="15"
                    data-fresh-interval="20"
                  >
                    {this.state.request_completed}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-cyan hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">PENDING REQUEST</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="257"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.request_pending}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-light-green hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TODAY SALES AMOUNT</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="243"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.sell_amt_today}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-orange hover-expand-effect">
                <div className="icon">
                  <i className="material-icons">bookmark</i>
                </div>
                <div className="content">
                  <div className="text">TODAY SALES PROFIT</div>
                  <div
                    className="number count-to"
                    data-from="0"
                    data-to="1225"
                    data-speed="1000"
                    data-fresh-interval="20"
                  >
                    {this.state.profit_amt_today}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Profit Chart</h2>
                </div>
                <div className="body">
                  <CanvasJSChart
                    options={this.state.profitChartOption}
                    /* onRef={ref => this.chart = ref} */
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Sell Chart</h2>
                </div>
                <div className="body">
                  <CanvasJSChart
                    options={this.state.sellChartOption}
                    /* onRef={ref => this.chart = ref} */
                  />
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
