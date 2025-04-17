class LoginPage {
    visit() {
        cy.visit(); // relative path only
      }
    loginForm = {
      email: '#email',
      password: '#pass',
      loginButton: '#send2',
    }

    
    clickonsignInButton(){
        cy.contains('a', 'Sign In').click();  

    }
  
    enterEmail(email) {
      cy.get(this.loginForm.email).type(email);
    }
  
    enterPassword(password) {
      cy.get(this.loginForm.password).type(password);
    }
  
    clickLoginButton() {
      cy.get(this.loginForm.loginButton).click();
    }
  }
  
  export default LoginPage; 

  