import { validate } from "json-schema";

class ProductPage {

  

    clickonsignInButton() {
        cy.contains('a', 'Sign In').click();  
      }


    
    clickOnGear() {
        cy.get("a[id='ui-id-6'] span:nth-child(2)").click();
      }
     mouseHoverOnProduct() {
        cy.get('a[id="ui-id-6"]').trigger('mouseover');

      }
      clickOnProduct() {
        cy.get('a[id="ui-id-27"]').click(); 


          }

    clickOnAddToCart() {
      cy.get("img[alt='Didi Sport Watch']").click();

    }


    addSecondWishlistProductToCart() {
        cy.xpath("//a[contains(text(),'Watches')]").click();
        cy.get("img[alt='Clamber Watch']").click();

      }
    addToCart() {
        cy.get('button.action.tocart').should('exist').first().click();

      
    }
    checkProductInCart() {
      cy.get('.action.showcart').click();
    }
    proceedToCheckout() {
      cy.get('#top-cart-btn-checkout').click();
    }
    
    enterstreetAdress(){

        cy.get('input[name="street[0]"]').type('123 Main Street');
        
        cy.get('input[name="city"]').type('New York');
        cy.get('select[name="region_id"]').select('California');

        cy.get('input[name="postcode"]').type('10001');
        cy.get('input[name="telephone"]').type('9876543210');
        cy.get("input[value='tablerate_bestway']").check({ force: true });

      }
      
       
      clicknextButton(){
        cy.get(".button.action.continue.primary").click();
        cy.get("button[title='Place Order']").click();
        // Get displayed subtotal and compare
    // Validate total price = unitPrice * 2
    
        // Assert the thank you message appears
     cy.contains('Thank you for your purchase!').should('be.visible');
      }

        
    }
         
    
   
    

  export default ProductPage;
  