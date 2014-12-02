'use strict';

exports.processTransaction = function(parameters) {
  return function(nightmare) {
    nightmare
      .goto(parameters.campaign.url)
      .click('#select-offer-' +
             parameters.campaign.offers[Math.floor(Math.random() * parameters.campaign.offers.length)].id)
      .type('input[name="firstname"]', parameters.prospect.firstName)
      .type('input[name="lastname"]', parameters.prospect.lastName)
      .type('input[name="email"]', parameters.prospect.emailAddress)
      .type('input[name="phone"]', parameters.prospect.phoneNumber)
      .type('input[name="address"]', parameters.prospect.billingAddress.address)
      .type('input[name="city"]', parameters.prospect.billingAddress.city)
      .type('input[name="zipcode"]', parameters.prospect.billingAddress.zipCode)
      // .select('input[name="country"]', parameters.prospect.billingAddress.country)
      .select('select[name="region-state"]', parameters.prospect.billingAddress.regionState)
      .click('#sameShipping')
      .type('input[name="s_address"]', parameters.prospect.shippingAddress.address)
      .type('input[name="s_city"]', parameters.prospect.shippingAddress.city)
      .type('input[name="s_zipcode"]', parameters.prospect.shippingAddress.zipCode)
      // .select('input[name="s_country"]', parameters.prospect.shippingAddress.country)
      .type('input[name="s_region-state"]', parameters.prospect.shippingAddress.regionState)
      .type('input[name="number"]', parameters.prospect.creditCard.number)
      .type('input[name="expiry"]', parameters.prospect.creditCard.expirationDate)
      .type('input[name="cvc"]', parameters.prospect.creditCard.securityCode)
      .type('input[name="name"]', parameters.prospect.creditCard.cardHolderName)
      .screenshot(process.cwd()
                  + '/screenshots/secureapay/submitTransaction/'
                  +  + '-index.png')
      .click('#btn-purchase')
      .wait().wait();
  };
};
