// verival2-t2.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */

/* ==== Test Created with Cypress Studio ==== */
it('US01Test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000/');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('.login_password').click();
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('.inventory_list').should('have.length', 1)
  /* ==== End Cypress Studio ==== */
});

it('US02Test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000');
  cy.get('#login_credentials').click();
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('.login_password').click();
  cy.get('.login_password').click();
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').clear();
  cy.get('[data-test="firstName"]').type('Eduardo');
  cy.get('[data-test="lastName"]').clear();
  cy.get('[data-test="lastName"]').type('Soares');
  cy.get('[data-test="postalCode"]').clear();
  cy.get('[data-test="postalCode"]').type('91360220');
  cy.get('[data-test="continue"]').click();
  cy.get('.summary_total_label').click();
  cy.get('.summary_total_label').should('have.text', 'Total: $60.45')
  /* ==== End Cypress Studio ==== */
});

it('US03Test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000');
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('.shopping_cart_badge').click();
  cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
  /* ==== End Cypress Studio ==== */
});

/* ==== Test Created with Cypress Studio ==== */
it('US04Test', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:3000');
  cy.get('[data-test="username"]').clear();
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear();
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  cy.get('.cart_item').should('not.exist');
  cy.get('.shopping_cart_badge').should('not.exist');
  /* ==== End Cypress Studio ==== */
});

it('US05Test', function() {

    cy.visit('http://localhost:3000');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#login_credentials').click();
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('.login_password').click();
    cy.get('.login_password').click();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_badge').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').clear();
    cy.get('[data-test="firstName"]').type('Eduardo');
    cy.get('[data-test="lastName"]').clear();
    cy.get('[data-test="lastName"]').type('Soares');
    cy.get('[data-test="postalCode"]').clear();
    cy.get('[data-test="postalCode"]').type('91360220');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    /* ==== End Cypress Studio ==== */

    cy.get('.title').should('have.text', 'Checkout: Complete!');

})

it('US06Test', function() {

    cy.visit('http://localhost:3000');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#login_credentials').click();
    cy.get('#login_credentials').click();
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('.login_password').click();
    cy.get('.login_password').click();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    /* ==== End Cypress Studio ==== */

    cy.get('#user-name').should('have.length', 1);
    cy.get('#password').should('have.length', 1);
    cy.get('#login-button').should('have.length', 1);

});

it('US07Test', function() {
    cy.visit('http://localhost:3000');



    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('.login_password').click();
    cy.get('.login_password').click();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_desc').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    /* ==== End Cypress Studio ==== */
});

it('US08Test', function() {
    cy.visit('http://localhost:3000');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('.login_password').click();
    cy.get('.login_password').click();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#item_4_title_link > .inventory_item_name').click();
    cy.get('.inventory_details_desc').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    cy.get('[data-test="back-to-products"]').click();
    cy.get('#item_1_title_link > .inventory_item_name').click();
    cy.get('.inventory_details_desc').should('have.text', 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
    /* ==== End Cypress Studio ==== */
});

it('US09Test', function() {
    cy.visit('http://localhost:3000');

    /* ==== Generated with Cypress Studio ==== */

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('.login_password').click();
    cy.get('.login_password').click();
    cy.get('.login_password').click();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_badge').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();
    cy.get('.error-message-container').should('have.length', 1);
    cy.get('.error-message-container').find('h3').should('have.text', 'Error: First Name is required');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="firstName"]').type('Eduardo');
    cy.get('[data-test="continue"]').click();
    cy.get('.error-message-container').should('have.length', 1);
    cy.get('.error-message-container').find('h3').should('have.text', 'Error: Last Name is required');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="lastName"]').type('Soares');
    cy.get('[data-test="continue"]').click();
    cy.get('.error-message-container').should('have.length', 1);
    cy.get('.error-message-container').find('h3').should('have.text', 'Error: Postal Code is required');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="postalCode"]').type('91360220');
    cy.get('[data-test="continue"]').click();
    cy.get('.title').should('have.text', 'Checkout: Overview');
    /* ==== End Cypress Studio ==== */
});

it('US10Test', function() {
    cy.visit('http://localhost:3000');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="login-button"]').click();
    cy.get('.error-message-container').should('have.length', 1);
    cy.get('.error-message-container').find('h3').should('have.text', 'Epic sadface: Username is required');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('.error-message-container').should('have.length', 1);
    cy.get('.error-message-container').find('h3').should('have.text', 'Epic sadface: Password is required');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.login_password').click();
    cy.get('.login_password').click();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.inventory_list').find('.inventory_item').should('have.length', 6);
    /* ==== End Cypress Studio ==== */
});