describe('Search Product Functionality', () => {
    it('Searches for a product and validates results', () => {
      cy.visit('/');
  
      // Type in the search box and hit enter
      cy.get('#search').type('Clamber Watch{enter}');
  
      // Validate URL has search term
      cy.url().should('include', 'catalogsearch/result');
  
      // Validate at least one result appears
      cy.get('.product-item').should('have.length.greaterThan', 0);

       // Scroll down to load more products
      cy.scrollTo(0, 600); // scrolls 600px down
      cy.wait(1000); // wait 
  
      // Optionally, confirm that the search term appears in product titles
      cy.get('.product-item-name').first().should('contain.text', 'Clamber Watch');
    });
  });
  