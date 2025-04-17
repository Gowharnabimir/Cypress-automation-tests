class RegisterPage {
    
    RegistrationForm = {
      firstName: '#firstname',
      lastName: '#lastname',
      email: '#email_address',
      password: '#password',
      confirmPassword: '#password-confirmation',
      registerButton: '.action.submit.primary',
    };
  
    clickOnCreateAnAccount() {
      cy.get("header[class='page-header'] li:nth-child(3) a:nth-child(1)").click();
    }
  
    enterFirstName(firstName) {
      cy.get(this.RegistrationForm.firstName).type(firstName);
    }
  
    enterLastName(lastName) {
      cy.get(this.RegistrationForm.lastName).type(lastName);
    }
  
    enterEmail(email) {
      cy.get(this.RegistrationForm.email).type(email);
    }
  
    enterPassword(password) {
      cy.get(this.RegistrationForm.password).type(password);
    }
  
    enterConfirmPassword(confirmPassword) {
      cy.get(this.RegistrationForm.confirmPassword).type(confirmPassword);
    }
  
    clickRegisterButton() {
      cy.get(this.RegistrationForm.registerButton).click;
    }
  }
  
  export default RegisterPage;
  