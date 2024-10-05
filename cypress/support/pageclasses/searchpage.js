class SearchPage{
    
    Enterurl(){
        cy.visit('https://tutorialsninja.com/demo/');

    }
   
    SearchPage(){
        // Enter the product name in the search box
        cy.get('[name="search"]').type('HP LP3065');
        
        // Click on the search button
        cy.get('.btn.btn-default.btn-lg').click();
        
        // click on the add to cart
        cy.get(`[onclick="cart.add('47', '1');"]`).click()
        
        // add quantity
        cy.get('#input-quantity').clear().type('2')
        cy.get('[id="button-cart"]').click();
        
        // Assertion to validate successful addition to cart
        cy.get('[class="alert alert-success alert-dismissible"]').should('contain', 'Success: You have added');        

    }
}
export default SearchPage;
    