const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');

test('Registration Test', async({page}) => { 
    test.setTimeout(10000);

    const registerpage =  new RegisterPage (page);

    await registerpage.goto();

    await registerpage.doRegister('9847110033','bhumee@gmail.com','2004-02-14','Bhumee','Aryal','hhhhhhhhhhhhhhhh');

});  
   