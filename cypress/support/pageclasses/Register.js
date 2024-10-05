class RegisterPage{
    Enterurl(){
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/register');
    }

    RegisterPage(){

        cy.get('[name="firstname"]').type('Lakshmi');
        cy.get('[name="lastname"]').type('Yasaswini');
        cy.get('[name="email"]').type('yashu@gmail.com');
        cy.get('[name="telephone"]').type('8317544735');
        cy.get('[name="password"]').type('yashu123');
        cy.get('[name="confirm"]').type('yashu123')
        cy.get('input[type="checkbox"]').check();
        cy.get('[type="submit"]').click();   
   
    }

}
export default RegisterPage;