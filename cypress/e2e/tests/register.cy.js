import RegisterPage from '../../pages/registerPage';
import testData from '../../fixtures/registerData.json';

const registerPage = new RegisterPage();

describe(' Registration Flow with Login Validation', () => {
  it('should register a new user successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    
    registerPage.clickOnCreateAnAccount();
    
    // Validate that the registration page is displayed
    cy.url().should('include', 'customer/account/create');
    cy.get('h1').should('contain', 'Create New Customer Account'); // Adjust this assertion as per the actual UI
    cy.get('h1').should('be.visible');

    registerPage.enterFirstName(testData.firstName);
    registerPage.enterLastName(testData.lastName);
    registerPage.enterEmail(testData.email);
    registerPage.enterPassword(testData.password);
    registerPage.enterConfirmPassword(testData.password);
    registerPage.clickRegisterButton();

    cy.wait(5000);
    cy.url().should('include', '/customer/account/');


    cy.get("button[title='Create an Account']").click();

   
    

  });
});
