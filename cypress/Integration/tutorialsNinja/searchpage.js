import RegisterPage from "../../support/pageclasses/Register";
import SearchPage from "../../support/pageclasses/searchpage";
// describe('Search page', () => {

//     // Run before all tests to visit the URL
//     before(() => {
//         cy.fixture('searchpage').then((data) => {
//             // cy.visit('https://tutorialsninja.com/demo/');  // Read URL from the property file
//             globalThis.data = data;
//         });
//     });

//     it('Add to cart tests', () => {

//         searchPage.Enterurl()

//         // Search for a product
//         searchPage.enterSearchText('HP LP3065');
//         searchPage.clickSearchButton();

//         // Click the first product in the search results
//         searchPage.clickProductFromResults();

//         // Add the product to the cart
//         searchPage.addToCart();

//         // Click 'shopping cart!' link from the success message
//         searchPage.clickShoppingCartLink();

//         // Assertion to check if the cart page is loaded
//         cy.url().should('include', 'checkout/cart');
        
//     });
// });

describe('search page', () => {

    const searchobj = new SearchPage
    const registerobj = new RegisterPage

    it('Add to cart', () => {
        // Enter url
        registerobj.Enterurl();

        // Register
        registerobj.RegisterPage();

        // Enter url
        searchobj.Enterurl();

        // Search add to cart
        searchobj.SearchPage();
        
    });
});