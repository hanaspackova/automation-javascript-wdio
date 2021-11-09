import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni');

       const email = $("#email");
       console.log("Pokud je policko email viditelne, najdes zde true: " + email.isDisplayed());
       console.log("Pokud je policko email editovatelne, najdes zde true: " + email.isEnabled());


       const password = $("#password");
       console.log("Pokud je policko password viditelne, najdes zde true: " + password.isDisplayed());
       console.log("Pokud je policko password editovatelne, najdes zde true: " + password.isEnabled());


       const prihlaseni = $(".btn-primary");
       console.log("Text tlacitka pro prihlaseni je " + prihlaseni.getText());
      
       const forgetPass = $(".btn-link");
       console.log("Atribut href u Zapomněli jste své heslo je : " + forgetPass.getAttribute("href"));

       email.setValue("Pub_Team_Admin@gmail.com");
       password.setValue("Testing2021");
       prihlaseni.click();       

       browser.saveScreenshot("screenshot.png");

       $('=Přihlášky').click();

       const radky = $(".dataTable").$("tbody").$$("tr");
       console.log("Pocet radku tabulky je : " + radky.length);

       radky.forEach(radek => {
           console.log(radek.getText())
       });
        //browser.pause(5000);
        
    });
    
});