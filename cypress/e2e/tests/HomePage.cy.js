
import HomePage from "../../pages/HomePage";

const homePage = new HomePage();

describe('Test case view homepage', () => {
    it('should register a new user successfully', () => {
      cy.visit('https://magento.softwaretestingboard.com/');

      homePage.clickonsignInButton();
        // Validate that the login page is displayed
        cy.url().should('include', 'customer/account/login');
        cy.get('h1').should('contain', 'Customer Login');
        cy.get('h1').should('be.visible');



    } );
});