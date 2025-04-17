 class WishlistPage {

    clickonsignInButton() {
        cy.contains('a', 'Sign In').click();  // Recommended: partial href match
      }
      clickOnGear() {
        cy.get("a[id='ui-id-6'] span:nth-child(2)").click();
      }
     mouseHoverOnProduct() {
        cy.get('a[id="ui-id-6"]').trigger('mouseover');

      }
        // clickOnProduct() {
        //     cy.get('a[id="ui-id-27"]').click(); 
        // }

        clickOnAddToCart() {
      

cy.get('.product-item-info').first().trigger('mouseover');
cy.get('.product-item-info').first().find('.action.towishlist').click({ force: true });
        }
   
addSecondProductToWishlist() {
    cy.get('.product-item-info').eq(1).trigger('mouseover');
    cy.get('.product-item-info').eq(1).find('.action.towishlist').click({ force: true });
  }


      addToCart() {
      cy.get("button[title='Add All to Cart']").click({  force: true });//click on add all to cart button



      
    }

    checkProductInCart() {
        cy.get('.action.showcart').click();
      }
    
     
      proceedToCheckout() {
        cy.get('#top-cart-btn-checkout').click();
      } 

     
      enterStreetAddress(){

        cy.get('input[name="street[0]"]').type('123 Main Street');
        
        cy.get('input[name="city"]').type('New York');
        cy.get('select[name="region_id"]').select('California');

        cy.get('input[name="postcode"]').type('10001');
        cy.get('input[name="telephone"]').type('9876543210');
        cy.get("input[value='tablerate_bestway']").check({ force: true });

      }

      clickNextButton(){
        cy.get(".button.action.continue.primary").click();
        cy.get("button[title='Place Order']").click();
        // Assert the thank you message appears
cy.contains('Thank you for your purchase!').should('be.visible');
      }


    addToWishlist() {
        cy.get('.action.towishlist').click();

    }
  
    addAllToCart() {
      cy.get("button[title='Add All to Cart'] span").click();
    }
  
    clickOnWishlistIcon() {
      cy.get('.link.wishlist').click(); // Adjust if different selector for wishlist icon
    }
  
    moveToCartFromWishlist() {
      cy.get('button.tocart').click(); // Adjust if needed
    }
  
    proceedToCheckout() {
      cy.get('.action.primary.checkout').click(); // Checkout button
    }
  
    verifyWishlistPage() {
      cy.contains('My Wish List').should('be.visible');
    }
  }
  
  
  export default WishlistPage;
  