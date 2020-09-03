import { reactLocalStorage } from "reactjs-localstorage";

const { default: AuthHandler } = require("./AuthHandler");
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");

class APIHandler {
  async checkLogin() {
    if (AuthHandler.checkTokenExpiry()) {
      var response = await Axios.post(Config.refreshApiUrl, {
        refresh: AuthHandler.getRefreshToken(),
      });

      reactLocalStorage.set("token", response.data.access);
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
    //Add await So wait for Token Update
    await this.checkLogin();

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
}

export default APIHandler;
