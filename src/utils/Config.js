class Config {
  //BASE_URL = "https://medicalstoreapi.herokuapp.com/";
  static loginUrl = "https://medicalstoreapi.herokuapp.com/api/gettoken/";
  static refreshApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/resfresh_token/";
  static companyApiUrl = "https://medicalstoreapi.herokuapp.com/api/company/";
  static homeApiUrl = "https://medicalstoreapi.herokuapp.com/api/home_api/";
  static customerRequestApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/customer_request/";
  static medicineNameApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/medicinebyname/";
  static companyBankApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/companybank/";
  static generateBillApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/generate_bill_api/";
  static companyAccountApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/companyaccount/";
  static companyOnly = "https://medicalstoreapi.herokuapp.com/api/companyonly/";
  static employeeApiURL = "https://medicalstoreapi.herokuapp.com/api/employee/";
  static medicineApiUrl = "https://medicalstoreapi.herokuapp.com/api/medicine/";
  static employeeBankApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/employee_all_bank/";
  static employeeBankApiUrlBYID =
    "https://medicalstoreapi.herokuapp.com/api/employee_bankby_id/";
  static employeeSalaryApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/employee_all_salary/";
  static employeeSalaryByIdApiUrl =
    "https://medicalstoreapi.herokuapp.com/api/employee_salaryby_id/";
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
