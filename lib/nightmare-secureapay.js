'use strict';

exports.submitTransaction = function(prospect) {
  return function(nightmare) {
    var timestamp = new Date().getTime();
    nightmare
      .viewport(1024, 798)
      .goto('https://demostore.secureapay.com/')
      .type('input[name="firstname"]', prospect.firstName)
      .type('input[name="lastname"]', prospect.lastName)
      .type('input[name="email"]', prospect.emailAddress)
      .type('input[name="phone"]', prospect.phoneNumber)
      .type('input[name="address"]', prospect.billingAddress.address)
      .type('input[name="city"]', prospect.billingAddress.city)
      .type('input[name="zipcode"]', prospect.billingAddress.zipCode)
   //  .select('input[name="country"]', prospect.billingAddress.country)
      .select('select[name="region-state"]', prospect.billingAddress.regionState)
/*    .type('input[name="s_address"]', prospect.shippingAddress.address)
      .type('input[name="s_city"]', prospect.shippingAddress.city)
      .type('input[name="s_zipcode"]', prospect.shippingAddress.zipCode)
      .type('input[name="s_country"]', prospect.shippingAddress.country)
      .type('input[name="s_region-state"]', prospect.shippingAddress.regionState) */
      .type('input[name="number"]', prospect.creditCard.number)
      .type('input[name="expiry"]', prospect.creditCard.expirationDate)
      .type('input[name="cvc"]', prospect.creditCard.securityCode)
      .type('input[name="name"]', prospect.creditCard.cardHolderName)
      .screenshot(process.cwd()
                  + '/screenshots/secureapay/submitTransaction/'
                  +  + '-index.png')
      .click('#btn-purchase')
      .wait()
      .wait()
      .url(function (url) {
        console.log(url);
        nightmare.screenshot(process.cwd()
          + '/screenshots/secureapay/submitTransaction/'
          +  timestamp + '-confirmation.png');
      });
  };
};
