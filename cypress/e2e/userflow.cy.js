describe('user happy path', () => {
  // navigate to the landing page
  it('should navigate to the home screen successfully', () => {
    cy.visit('localhost:3000/');
    cy.url().should('include', 'localhost:3000/');

  // navigate to the register screen

    cy.get('button[name="register-button"]')
    .click();
    cy.url().should('include', 'localhost:3000/register');

  // enter email, password, confirm password, name, click register
    cy.get('input[name="email"]')
    .focus()
    .type('email@email.com');
    cy.get('input[name="password"]')
    .focus()
    .type('randompassword123');
    cy.get('input[name="cpassword"]')
    .focus()
    .type('randompassword123');
    cy.get('input[name="name"]')
    .focus()
    .type('Name');
    // navigates to dashboard
    cy.get('button[name="registerbtn"]')
    .click();
    cy.url().should('include', 'localhost:3000/dashboard');

    // navigate to create new listing
    it('should get to new listing page', () => {
    cy.get('button[name="createnewlisting"]')
    .click();
    cy.url().should('include', 'localhost:3000/listing/new');
    });

    // enter info
    cy.get('input[name="title"]')
    .focus()
    .type('ListingTitle');
    cy.get('input[name="address"]')
    .focus()
    .type('Murphy Street');
    cy.get('input[name="price"]')
    .focus()
    .type('550');
    cy.get('input[name="type"]')
    .focus()
    .type('House');
    cy.get('input[name="bedrooms"]')
    .focus()
    .type('2');
    cy.get('input[name="bathrooms"]')
    .focus()
    .type('4');
    cy.get('input[name="Amenities"]')
    .focus()
    .type('Stove');
    // click create
    cy.get('button[name="createBtn"]')
    .click();
    cy.url().should('include', 'localhost:3000/listing/new');
    // edit thumbnail and title
    cy.get('input[name="photo"]')
    .selectFile('src/logo.svg');

    // log out
    cy.get('button[name="logoutBtn"]')
    .click();
    cy.url().should('include', 'localhost:3000/');

    // login 
    cy.get('button[name="login-button"]')
    .click();
    cy.url().should('include', 'localhost:3000/login');
    cy.get('button[name="loginBtn"]')
    .click();
    cy.url().should('include', 'localhost:3000/dashboard');

  });

});