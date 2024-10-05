class Links{
    clickonlink(){
        cy.contains(Linktext).click();
    }
}
export default Links;