Feature('CodeceptJS Demonstration');


Scenario('Test fortission E2E', async (I) => {
  I.amOnPage('https://fortissio.com.qaplexop.com/');
  I.click('OPEN ACCOUNT');
  I.seeInCurrentUrl('https://fortissio.com.qaplexop.com/register');

  I.fillField('Email', `antropov+qa2+${uuidv4()}@gmail.com`);
  I.fillField('Password', 'hikHIK121');
  I.click({ id: 'privacy-notice'} );
  I.seeCheckboxIsChecked({ id: 'privacy-notice'});
  I.click('Create an account');

  // on the platform
  I.retry({ retries: 40, minTimeout: 500 }).seeInCurrentUrl('https://desktoppro.fortissio-qa2.xyz/main');

  I.retry({ retries: 30, minTimeout: 100 }).seeElement('#_appcues_hamburgerMenu')
  I.click('#_appcues_hamburgerMenu')

  I.seeElement('#_appcues_main_nav_deposit')
  I.click('#_appcues_main_nav_deposit')
  
  I.retry({ retries: 3, minTimeout: 500 }).seeElement('//div[text()= "Cancel"]')
  I.click( '//div[text()= "Cancel"]' )

  I.click('#_appcues_hamburgerMenu')
  I.click('#_appcues_main_nav_deposit')
  I.retry({ retries: 3, minTimeout: 500 }).seeElement('//div[text()= "Complete now"]')
  I.click( '//div[text()= "Complete now"]' )

  // on the KYC
  within({frame: "#deposit-page-iframe"}, () => {
    I.retry({ retries: 3, minTimeout: 3000 }).see('Full Name')
    I.fillField('FullName', 'First Last')    
    I.fillField('DayOfBirth', '24')
    I.fillField('MonthOfBirth', '05')
    I.fillField('YearOfBirth', '1980')
    I.fillField('PhoneNumber', '0881233212')
    I.fillField('FullAddress', 'ulitsa "Nikola Tesla“ 3, Sofia, Bulgaria, 1799')
    I.click('Complete and Fund')

    I.fillField('PostalCode', '1799')
    I.fillField('Street', 'ulitsa "Nikola Tesla“ 3')
    I.fillField('City', 'Sofia')
    
    I.click('Complete and Fund')

  });

  // on Deposit
  within({frame: "#deposit-page-iframe"}, () => {
    I.see( 'Credit/Debit Card' )
    I.click( '//span[text()= "Credit/Debit Card"]' )

    I.fillField('amount', '199')
    I.fillField('name', 'First2 Last2')
    I.fillField('#_appcues_card_number_input', '4444 3333 2222 1111')
    I.fillField('exMM', '12')
    I.fillField('exYY', '2025')
    I.fillField('cvv', '123')
    I.click( 'Proceed' )
    I.fillField('passportId', 'xx98765')
    I.click( '#_appcues_DepositSubmitButton-' )
  });

  // on KYC 2
  within({frame: "#deposit-page-iframe"}, () => {
    I.retry({ retries: 10, minTimeout: 1000 }).see('Appropriateness test')
    I.click('Complete Later')
  })
  
});




















  //const email = await I.waitForLatestEmail(30);
  // console.log(email)

  
  // I.see('User is valid');
  // I.dontSeeInCurrentUrl('/documentation');
  

/*
Scenario('Test login E2E', async (I) => {
  I.amOnPage('https://desktoppro.fortissio-qa2.xyz/login?logLevel=error');

  I.fillField('Email', 'antropov+qa2+5d81d716-8014-4065-9671-73f34f80736c@gmail.com');
  I.fillField('Password', 'hikHIK121');

  //I.see
  I.click('Login')

  I.seeElement('#_appcues_hamburgerMenu')
  I.click('#_appcues_hamburgerMenu')

  I.seeElement('#_appcues_main_nav_deposit')
  I.click('#_appcues_main_nav_deposit')
  
  I.retry({ retries: 3, minTimeout: 500 }).seeElement('//div[text()= "Cancel"]')
  I.click( '//div[text()= "Cancel"]' )

  I.click('#_appcues_hamburgerMenu')
  I.click('#_appcues_main_nav_deposit')
  I.retry({ retries: 3, minTimeout: 500 }).seeElement('//div[text()= "Complete now"]')
  I.click( '//div[text()= "Complete now"]' )

  
  within({frame: "#deposit-page-iframe"}, () => {
    I.retry({ retries: 3, minTimeout: 500 }).see('Full Name')
    I.fillField('FullName', 'First Last')
    I.fillField('DayOfBirth', '24')
    I.fillField('MonthOfBirth', '5')
    I.fillField('YearOfBirth', '1980')
    I.fillField('PhoneNumber', '0881233212')
    I.fillField('FullAddress', 'ulitsa "Nikola Tesla“ 3, Sofia, Bulgaria, 1799')
    I.click('Complete and Fund')
  });
    
  pause()
  
  
});
*/

function uuidv4() {
    return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }