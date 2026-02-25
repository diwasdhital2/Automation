const {expect }= require('@playwright/test');

exports.RegisterPage = class RegisterPage {

constructor(page) {
    this.page = page;

  //defining Buttons/Locators
    this.locBtn = page.getByRole('button', { name: 'Kathmandu' });
    this.SignInBtn = page.getByRole('button',{name:'Sign in'});
    this.SignUpBtn = page.getByRole('button',{name:'SIGN UP'});
    this.MobileNO = page.getByRole('textbox',{ name:'Mobile Number'});
    this.EmailBox = page.getByRole('textbox',{name:'Email'});
    this.DOB = page.getByRole('Date',{name:'Date Of Birth'});
    this.FirstNameBox = page.getByRole('textbox',{name:'First Name'});
    this.MiddleNameBox = page.getByRole('textbox',{name:'Middle Name(Optional)'});
    this.LastNameBox = page.getByRole('textbox',{name:'Last Name'});
    this.passwordBox = page.getByRole('textbox',{name:'Password'});
    this.checkBox = page.getByRole('checkbox',{name:'I agree to all Terms & Conditions'});
    this.ConfirmBtn = page.getByRole('button',{name:'Confirm'})
}
  //defining Actions / methods
   async goto() {
    await this.page.goto('https://www.qfxcinemas.com/');
    // waitUntil: 'networkidle'
  }


async doRegister(mobile,email,dob,firstname,lastname,password){
await this.locBtn.click();
await this.SignInBtn.click();
await this.SignUpBtn.click();
await this.MobileNO.fill(mobile);
await this.EmailBox.fill(email);
await this.DOB.fill(dob);
await this.FirstNameBox.fill(firstname);
await this.LastNameBox.fill(lastname);
await this.passwordBox.fill(password);
await this.checkBox.check();
await this.ConfirmBtn.click();


// await page.getByRole('button', { name: 'Kathmandu' }).click();
//   await page.getByRole('button', { name: 'Sign in' }).click();
//   await page.getByText('SIGN UP').click();
//   await page.getByPlaceholder('Enter your phone number').click();
//   await page.getByPlaceholder('Enter your phone number').fill('9847110033');
//   await page.getByRole('textbox', { name: 'Email' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill('bhumee@gmail.com');
//   await page.getByRole('textbox', { name: 'Date Of Birth' }).fill('2004-02-14');
//   await page.getByRole('textbox', { name: 'First Name' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).fill('Bhumee');
//   await page.getByRole('textbox', { name: 'Last Name' }).click();
//   await page.getByRole('textbox', { name: 'Last Name' }).fill('Aryal');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('hhhhhhhhhhhhhhhh');
//   await page.getByRole('checkbox', { name: 'I agree to all Terms &' }).check();
//   await page.getByRole('button', { name: 'Confirm' }).click();
}
};