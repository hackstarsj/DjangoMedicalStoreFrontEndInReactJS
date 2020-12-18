import React from "react";
import AuthHandler from "../utils/AuthHandler";
import APIHandler from "../utils/APIHandler";
import { Link } from "react-router-dom";
import AutoCompleteMedicine from "../components/AutoCompleteMedicine";

class BillGenerateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }
  state = {
    errorRes: false,
    errorMessage: "",
    btnMessage: 0,
    sendData: false,
    medicineDetails: [
      {
        sr_no: "",
        medicine_name: "",
        qty: "",
        qty_type: "",
        unit_price: "",
        amount: "",
      },
    ],
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

  AddMedicineDetails = () => {
    this.state.medicineDetails.push({
      sr_no: "",
      medicine_name: "",
      qty: "",
      qty_type: "",
      unit_price: "",
      amount: "",
    });
    this.setState({});
  };

  RemoveMedicineDetails = () => {
    if (this.state.medicineDetails.length > 1) {
      this.state.medicineDetails.pop();
      this.setState({});
    }
  };

  showDataInInputs = (index, item) => {
    console.log(index);
    console.log(item);
    this.state.medicineDetails[index].qty = 1;
    this.state.medicineDetails[index].qty_type = "Pieces";
    this.state.medicineDetails[index].unit_price = item.sell_price;
    this.state.medicineDetails[index].amount = item.sell_price;
    this.setState({});
  };

  qtyChangeUpdate = (event) => {
    var value = event.target.value;
    var index = event.target.dataset.index;

    this.state.medicineDetails[index].amount =
      this.state.medicineDetails[index].unit_price * value;
    this.setState({});
  };

  render() {
    return (
      <section className="content">
        <div className="container-fluid">
          <div className="block-header">
            <h2>Generate Bill</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2>Generate Bill for Customers</h2>
                </div>
                <div className="body">
                  <form onSubmit={this.formSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Customer Name :</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="customer_name"
                              name="customer_name"
                              className="form-control"
                              placeholder="Enter Customer Name "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Address : </label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className="form-control"
                              placeholder="Enter Address."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="email_address">Phone :</label>
                        <div className="form-group">
                          <div className="form-line">
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              className="form-control"
                              placeholder="Enter Customer Phone "
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    <h4>Medicine Details</h4>
                    {this.state.medicineDetails.map((item, index) => (
                      <div className="row" key={index}>
                        <div className="col-lg-2">
                          <label htmlFor="email_address">SR No : </label>
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                id="sr_no"
                                name="sr_no"
                                className="form-control"
                                placeholder="Enter SR No."
                                defaultValue={index + 1}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <label htmlFor="email_address">
                            Medicine Name :{" "}
                          </label>
                          <div className="form-group">
                            <div className="form-line">
                              <AutoCompleteMedicine
                                itemPostion={index}
                                showDataInInputs={this.showDataInInputs}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <label htmlFor="email_address">Qty : </label>
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                id="qty"
                                name="qty"
                                className="form-control"
                                placeholder="Enter Quantity."
                                defaultValue={item.qty}
                                data-index={index}
                                onChange={this.qtyChangeUpdate}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <label htmlFor="email_address">Qty Type : </label>
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                id="qty_type"
                                name="qty_type"
                                className="form-control"
                                placeholder="Enter Qty Type."
                                defaultValue={item.qty_type}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <label htmlFor="email_address">Unit Price : </label>
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                id="unit_price"
                                name="unit_price"
                                className="form-control"
                                placeholder="Enter Unit Price."
                                defaultValue={item.unit_price}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <label htmlFor="email_address">Amount : </label>
                          <div className="form-group">
                            <div className="form-line">
                              <input
                                type="text"
                                id="amount"
                                name="amount"
                                className="form-control"
                                placeholder="Enter Amount"
                                defaultValue={item.amount}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="row">
                      <div className="col-lg-6">
                        <button
                          onClick={this.AddMedicineDetails}
                          className="btn btn-block btn-success"
                          type="button"
                        >
                          ADD MEDICINE DETAILS
                        </button>
                      </div>
                      <div className="col-lg-6">
                        <button
                          onClick={this.RemoveMedicineDetails}
                          className="btn btn-block btn-warning"
                          type="button"
                        >
                          REMOVE MEDICINE DETAILS
                        </button>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary m-t-15 waves-effect btn-block"
                      disabled={this.state.btnMessage == 0 ? false : true}
                    >
                      {this.state.btnMessage == 0
                        ? "Generate Bill"
                        : "Generating Bill Please Wait.."}
                    </button>
                    <br />
                    {this.state.errorRes == false &&
                    this.state.sendData == true ? (
                      <div className="alert alert-success">
                        <strong>Success!</strong> {this.state.errorMessage}.
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

export default BillGenerateComponent;
