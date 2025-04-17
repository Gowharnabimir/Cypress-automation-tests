import LoginPage from "../../pages/LoginPage";
import ProductPage from '../../pages/ProductPage'; 
import WishlistPage from "../../pages/WishlistPage";
import testData from '../../fixtures/registerData.json';
const productPage= new ProductPage();  
const loginPage = new LoginPage();
const wishlistPage = new WishlistPage();

describe('Test Case c: AddProduct to wishlist and checkout ', () => {
    it('should register a new user successfully', () => {
      cy.visit('https://magento.softwaretestingboard.com/');
     
      loginPage.clickonsignInButton();
      cy.wait(5000);
  
      loginPage.enterEmail(testData.email);
      loginPage.enterPassword(testData.password);
      loginPage.clickLoginButton();
  
      productPage.clickOnGear();
  
      productPage.mouseHoverOnProduct();

      
    //   cy.wait(2000);
      productPage.clickOnProduct();
        cy.wait(6000);  
        wishlistPage.clickOnAddToCart();
        
        cy.wait(4000);  
        wishlistPage.addToCart();
       // productPage.clickOnAddToCart();
        cy.wait(4000);
        wishlistPage.checkProductInCart();
        cy.wait(6000);
        wishlistPage.proceedToCheckout();

        cy.wait(3000);
        wishlistPage.enterStreetAddress();
        cy.wait(5000);
        wishlistPage.clickNextButton();
        cy.wait(3000);
        

       
      

    
    });
});