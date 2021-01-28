import { reactLocalStorage } from "reactjs-localstorage";

const { default: AuthHandler } = require("./AuthHandler");
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");

class APIHandler {
  async checkLogin() {
    if (AuthHandler.checkTokenExpiry()) {
      try {
        var response = await Axios.post(Config.refreshApiUrl, {
          refresh: AuthHandler.getRefreshToken(),
        });

        reactLocalStorage.set("token", response.data.access);
      } catch (error) {
        console.log(error);

        //Not Using Valid Token for Refresh then Logout the User
        AuthHandler.logoutUser();
        window.location = "/";
      }
    }
  }

  async saveCompanyData(
    name,
    license_no,
    address,
    contact_no,
    email,
    description
  ) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.post(
      Config.companyApiUrl,
      {
        name: name,
        license_no: license_no,
        address: address,
        contact_no: contact_no,
        email: email,
        description: description,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async fetchAllCompany() {
    await this.checkLogin();

    var response = await Axios.get(Config.companyApiUrl, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async fetchHomePage() {
    await this.checkLogin();

    var response = await Axios.get(Config.homeApiUrl, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async fetchAllCustomerRequest() {
    await this.checkLogin();

    var response = await Axios.get(Config.customerRequestApiUrl, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async fetchAllCompanyAccount() {
    await this.checkLogin();

    var response = await Axios.get(Config.companyAccountApiUrl, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async fetchCompanyDetails(id) {
    await this.checkLogin();

    var response = await Axios.get(Config.companyApiUrl + "" + id + "/", {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async fetchMedicineByName(name) {
    if (name != "") {
      await this.checkLogin();

      var response = await Axios.get(Config.medicineNameApiUrl + "" + name, {
        headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
      });

      return response;
    } else {
      return { data: [] };
    }
  }

  async editCompanyData(
    name,
    license_no,
    address,
    contact_no,
    email,
    description,
    id
  ) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.put(
      Config.companyApiUrl + "" + id + "/",
      {
        name: name,
        license_no: license_no,
        address: address,
        contact_no: contact_no,
        email: email,
        description: description,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async saveCompanyBankData(bank_account_no, ifsc_no, company_id) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.post(
      Config.companyBankApiUrl,
      {
        bank_account_no: bank_account_no,
        ifsc_no: ifsc_no,
        company_id: company_id,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async saveCustomerRequestData(name, phone, medicine_details, prescription) {
    await this.checkLogin();
    //Wait Until Token Get Updated
    var formData = new FormData();
    formData.append("customer_name", name);
    formData.append("phone", phone);
    formData.append("medicine_details", medicine_details);
    formData.append("prescription", prescription);

    var response = await Axios.post(Config.customerRequestApiUrl, formData, {
      headers: {
        Authorization: "Bearer " + AuthHandler.getLoginToken(),
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  }

  async updateCustomerRequest(customer_id, name, phone, medicine_details) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.put(
      Config.customerRequestApiUrl + "" + customer_id + "/",
      {
        customer_name: name,
        phone: phone,
        medicine_details: medicine_details,
        status: 1,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );
    return response;
  }

  async fetchCompanyBankDetails(id) {
    await this.checkLogin();

    var response = await Axios.get(Config.companyBankApiUrl + "" + id + "/", {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async generateBill(name, address, phone, medicineDetails) {
    await this.checkLogin();

    var response = await Axios.post(
      Config.generateBillApiUrl,
      {
        name: name,
        address: address,
        contact: phone,
        medicine_details: medicineDetails,
      },
      {
        headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
      }
    );

    return response;
  }

  async editCompanyBankData(bank_account_no, ifsc_no, company_id, id) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.put(
      Config.companyBankApiUrl + "" + id + "/",
      {
        bank_account_no: bank_account_no,
        ifsc_no: ifsc_no,
        company_id: company_id,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async fetchCompanyOnly() {
    await this.checkLogin();

    var response = await Axios.get(Config.companyOnly, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async saveMedicineData(
    name,
    medical_typ,
    buy_price,
    sell_price,
    c_gst,
    s_gst,
    batch_no,
    shelf_no,
    expire_date,
    mfg_date,
    company_id,
    description,
    in_stock_total,
    qty_in_strip,
    medicinedetails
  ) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.post(
      Config.medicineApiUrl,
      {
        name: name,
        medical_typ: medical_typ,
        buy_price: buy_price,
        sell_price: sell_price,
        c_gst: c_gst,
        s_gst: s_gst,
        batch_no: batch_no,
        shelf_no: shelf_no,
        expire_date: expire_date,
        mfg_date: mfg_date,
        company_id: company_id,
        description: description,
        in_stock_total: in_stock_total,
        qty_in_strip: qty_in_strip,
        medicine_details: medicinedetails,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async fetchAllMedicine() {
    await this.checkLogin();

    var response = await Axios.get(Config.medicineApiUrl, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async editMedicineData(
    name,
    medical_typ,
    buy_price,
    sell_price,
    c_gst,
    s_gst,
    batch_no,
    shelf_no,
    expire_date,
    mfg_date,
    company_id,
    description,
    in_stock_total,
    qty_in_strip,
    medicinedetails,
    id
  ) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.put(
      Config.medicineApiUrl + "" + id + "/",
      {
        name: name,
        medical_typ: medical_typ,
        buy_price: buy_price,
        sell_price: sell_price,
        c_gst: c_gst,
        s_gst: s_gst,
        batch_no: batch_no,
        shelf_no: shelf_no,
        expire_date: expire_date,
        mfg_date: mfg_date,
        company_id: company_id,
        description: description,
        in_stock_total: in_stock_total,
        qty_in_strip: qty_in_strip,
        medicine_details: medicinedetails,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async saveCompanyTransactionData(
    company_id,
    transaction_type,
    transaction_amt,
    transaction_date,
    payment_mode
  ) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.post(
      Config.companyAccountApiUrl,
      {
        company_id: company_id,
        transaction_type: transaction_type,
        transaction_amt: transaction_amt,
        transaction_date: transaction_date,
        payment_mode: payment_mode,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async fetchEmployee() {
    await this.checkLogin();

    var response = await Axios.get(Config.employeeApiURL, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async saveEmployeeData(name, joining_date, phone, address) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.post(
      Config.employeeApiURL,
      {
        name: name,
        joining_date: joining_date,
        phone: phone,
        address: address,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async fetchEmployeeById(id) {
    await this.checkLogin();

    var response = await Axios.get(Config.employeeApiURL + "" + id + "/", {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async editEmployeeData(name, joining_date, phone, address, id) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.put(
      Config.employeeApiURL + "" + id + "/",
      {
        name: name,
        joining_date: joining_date,
        phone: phone,
        address: address,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async fetchSalaryEmployee(id) {
    await this.checkLogin();

    var response = await Axios.get(Config.employeeSalaryByIdApiUrl + "" + id, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async fetchBankEmployee(id) {
    await this.checkLogin();

    var response = await Axios.get(Config.employeeBankApiUrlBYID + "" + id, {
      headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() },
    });

    return response;
  }

  async AddEmployeeSalaryData(salary_date, salary_amount, employee_id) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.post(
      Config.employeeSalaryApiUrl,
      {
        salary_date: salary_date,
        salary_amount: salary_amount,
        employee_id: employee_id,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }

  async AddEmployeeBankData(bank_account_no, ifsc_no, employee_id) {
    await this.checkLogin();
    //Wait Until Token Get Updated

    var response = await Axios.post(
      Config.employeeBankApiUrl,
      {
        bank_account_no: bank_account_no,
        ifsc_no: ifsc_no,
        employee_id: employee_id,
      },
      { headers: { Authorization: "Bearer " + AuthHandler.getLoginToken() } }
    );

    return response;
  }
}

export default APIHandler;
