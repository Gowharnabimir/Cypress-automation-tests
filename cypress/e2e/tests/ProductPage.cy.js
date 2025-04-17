import LoginPage from "../../pages/LoginPage";
import ProductPage from '../../pages/ProductPage'; 
import testData from '../../fixtures/registerData.json';
//loginPage.enterEmail(user.email);
        
const loginPage = new LoginPage();
const productPage= new ProductPage();  


describe('Test Case A: AddProduct and checkout ', () => {
  it('should register a new user successfully', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
   
    loginPage.clickonsignInButton();
    cy.wait(5000);

    loginPage.enterEmail(testData.email);
    loginPage.enterPassword(testData.password);
    loginPage.clickLoginButton();

    productPage.clickOnGear();

    productPage.mouseHoverOnProduct();
    
    productPage.clickOnProduct();
    productPage.clickOnAddToCart();
    cy.wait(5000);
    productPage.addSecondWishlistProductToCart();
    cy.wait(2000);
    productPage.addToCart();
    cy.wait(2000);
    productPage.checkProductInCart();
    cy.wait(2000);
    productPage.proceedToCheckout();
    cy.wait(3000);
    productPage.enterstreetAdress();
    cy.wait(3000);
    productPage.clicknextButton();
    cy.wait(3000);
    
   

    
});
});
