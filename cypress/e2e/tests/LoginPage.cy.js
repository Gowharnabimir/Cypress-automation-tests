

import LoginPage from "../../pages/LoginPage";
import testData from '../../fixtures/registerData.json';

// import testData from '../../fixtures/registerData.json';
// import testData from '../../fixtures/registerData.json';
 const loginPage = new LoginPage();

describe(' Sign In', () => {
    it('should login a new user successfully', () => {
      cy.visit('/customer/account/login');


        loginPage.clickonsignInButton();

         loginPage.enterEmail(testData.email);
         loginPage.enterPassword(testData.password);
         loginPage.clickLoginButton();
        
        
    });

    })
