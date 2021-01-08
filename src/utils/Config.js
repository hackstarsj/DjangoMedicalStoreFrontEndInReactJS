class Config {
  static BASE_URL = "https://medicalstoreapi.herokuapp.com/";
  static loginUrl = BASE_URL + "api/gettoken/";
  static refreshApiUrl = BASE_URL + "api/resfresh_token/";
  static companyApiUrl = BASE_URL + "api/company/";
  static homeApiUrl = BASE_URL + "api/home_api/";
  static customerRequestApiUrl = BASE_URL + "api/customer_request/";
  static medicineNameApiUrl = BASE_URL + "api/medicinebyname/";
  static companyBankApiUrl = BASE_URL + "api/companybank/";
  static generateBillApiUrl = BASE_URL + "api/generate_bill_api/";
  static companyAccountApiUrl = BASE_URL + "api/companyaccount/";
  static companyOnly = BASE_URL + "api/companyonly/";
  static employeeApiURL = BASE_URL + "api/employee/";
  static medicineApiUrl = BASE_URL + "api/medicine/";
  static employeeBankApiUrl = BASE_URL + "api/employee_all_bank/";
  static employeeBankApiUrlBYID = BASE_URL + "api/employee_bankby_id/";
  static employeeSalaryApiUrl = BASE_URL + "api/employee_all_salary/";
  static employeeSalaryByIdApiUrl = BASE_URL + "api/employee_salaryby_id/";
  static homeUrl = "/home";
  static logoutPageUrl = "/logout";

  static sidebarItem = [
    { index: "0", title: "Home", url: "/home", icons: "home" },
    { index: "1", title: "Company", url: "/company", icons: "assessment" },
    {
      index: "2",
      title: "Add Medicine",
      url: "/addMedicine",
      icons: "assessment",
    },
    {
      index: "3",
      title: "Manage Medicine",
      url: "/manageMedicine",
      icons: "assessment",
    },
    {
      index: "4",
      title: "Manage Company Account",
      url: "/manageCompanyAccount",
      icons: "assessment",
    },
    {
      index: "5",
      title: "Manage Employee",
      url: "/employeeManage",
      icons: "assessment",
    },
    {
      index: "6",
      title: "Generate Bill",
      url: "/generateBill",
      icons: "assessment",
    },
    {
      index: "7",
      title: "Customer Request",
      url: "/customerRequest",
      icons: "assessment",
    },
  ];
}

export default Config;
