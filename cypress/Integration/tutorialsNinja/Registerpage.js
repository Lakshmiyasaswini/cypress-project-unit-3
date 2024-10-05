import RegisterPage from "../../support/pageclasses/Register";

describe('Tutorials Ninja', () => {

    const registerobj = new RegisterPage

    it('register tests', () => {

        // Enter url
        registerobj.Enterurl();

        // Register
        registerobj.RegisterPage();
        
    });
});