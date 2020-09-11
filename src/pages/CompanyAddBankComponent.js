import React from "react";
import AuthHandler from "../utils/AuthHandler";
import APIHandler from "../utils/APIHandler";
import { Link } from "react-router-dom";

class CompanyAddBankComponent extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }
  state = {
    errorRes: false,
    errorMessage: "",
    btnMessage: 0,
    sendData: false,
  };

  async formSubmit(event) {
    event.preventDefault();
    this.setState({ btnMessage: 1 });

    var apiHandler = new APIHandler();
    var response = await apiHandler.saveCompanyBankData(
      event.target.bank_account_no.value,
      event.target.ifsc_no.value,
      this.props.match.params.id
    );
    console.log(response);
    this.setState({ btnMessage: 0 });
    this.setState({ errorRes: response.data.error });
    this.setState({ errorMessage: response.data.message });
    this.setState({ sendData: true });
  }

  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>MANAGE COMPANY</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Add Company Bank #{this.props.match.params.id}</h2>
                </div>
                <div className="body">
                  <form onSubmit={this.formSubmit}>
                    <label htmlFor="email_address">Account No</label>
                    <div className="form-group">
                      <div className="form-line">
                        <input
                          type="text"
                          id="bank_account_no"
                          name="bank_account_no"
                          className="form-control"
                          placeholder="Enter Company Account No."
                        />
                      </div>
                    </div>
                    <label htmlFor="email_address">IFSC No.</label>
                    <div className="form-group">
                      <div className="form-line">
                        <input
                          type="text"
                          id="ifsc_no"
                          name="ifsc_no"
                          className="form-control"
                          placeholder="Enter IFSC Code."
                        />
                      </div>
                    </div>

                    <br />
                    <button
                      type="submit"
                      className="btn btn-primary m-t-15 waves-effect btn-block"
                      disabled={this.state.btnMessage == 0 ? false : true}
                    >
                      {this.state.btnMessage == 0
                        ? "Add Company Bank"
                        : "Adding Company Bank Please Wait.."}
                    </button>
                    <br />
                    {this.state.errorRes == false &&
                    this.state.sendData == true ? (
                      <div className="alert alert-success">
                        <strong>Success!</strong> {this.state.errorMessage}.
                        <Link
                          to={"/companydetails/" + this.props.match.params.id}
                          className="btn btn-info"
                        >
                          Back to Company Details
                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                    {this.state.errorRes == true &&
                    this.state.sendData == true ? (
                      <div className="alert alert-danger">
                        <strong>Failed!</strong>
                        {this.state.errorMessage}.
                      </div>
                    ) : (
                      ""
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CompanyAddBankComponent;
