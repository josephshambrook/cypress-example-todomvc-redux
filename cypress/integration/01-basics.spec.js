describe('A useful describe', () => {
  before(() => {
    cy.log('I run once before all tests in this describe');
    cy.visit('/');
  });

  after(function() {
    cy.log('I run once after all tests in this describe');
  });

  beforeEach(function() {
    cy.log('I run before each test in this describe');
  });

  afterEach(function() {
    cy.log('I run after each test in this describe');
  });

  describe('Assertion styles', () => {
    it('checks the text using an implicit assertion - i.e. .should()', () => {
      // the arguments for .should() are from Chai-jQuery
      // https://www.chaijs.com/plugins/chai-jquery/
      cy.get('h1').should('have.text', 'todos');

      // you can also chain implicit assertions using .and()
      cy.get('h1')
        .should('have.text', 'todos')
        .and('be.visible')
        .and('not.be.hidden')
        .and('have.attr', 'data-testid', 'header-main');
    });

    it('checks the text using an explicit assertion - i.e. expect()', () => {
      // Note: expect() is a BDD assertion
      // https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions
      expect('todos').to.equal('todos');

      // You can then chain Chai-jQuery methods onto expect()
      // https://docs.cypress.io/guides/references/assertions.html#Chai-jQuery
      cy.get('h1').should(($el) => {
        expect($el).to.have.text('todos');
        expect($el).to.be.visible;
        expect($el).not.to.be.hidden;
        expect($el).to.have.attr('data-testid', 'header-main');
      });

      // assert() is a TDD assertion
      // https://docs.cypress.io/guides/references/assertions.html#TDD-Assertions
      cy.get('h1').should(($el) => {
        assert.equal($el.text(), 'todos');
      });
    });
  });

  describe('Selecting elements', () => {
    it('uses the .get() method to get elements', () => {
      cy.get('h1').should('be.visible');
    });

    it('accepts any CSS selector available in Chrome', () => {
      cy.get('body h1').should('be.visible');
      cy.get('.header > h1:first-of-type').should('be.visible');
      cy.get('header[class="header"] h1').should('be.visible');
    });

    it('should however target specific attributes added for testing', () => {
      // see why here: https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements
      cy.get('[data-testid="header-main"]').should('be.visible');
    });
  });
});
