class baseLogin {
    baseUrl = "https://opensource-demo.orangehrmlive.com/";
    username = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    password = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
    loginBtn = ".oxd-button";
    dasboardText = ".oxd-topbar-header-breadcrumb > .oxd-text";
    MassageWrongPass = ".oxd-alert-content > .oxd-text";
    MassageClearUsname = ".oxd-alert";
    MassageClearPass = ":nth-child(3) > .oxd-input-group > .oxd-text";
  }
  export default baseLogin;
  