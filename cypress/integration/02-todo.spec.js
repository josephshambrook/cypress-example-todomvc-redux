describe('TodoMVC - Adding', () => {
  before(() => {
    cy.visit('/');
  });

  context('When page is initially opened', () => {
    it('renders an empty input to add todos', () => {
      cy.getTestId('todo-input-new')
        .should('be.visible')
        .and('have.value', '')
        .and('have.placeholder', 'What needs to be done?');
    });

    it('should focus on the todo input field', function () {
      cy.focused().should('have.class', 'new-todo')
    })
  });

  context('New todo', () => {
    it('adds a new todo to the bottom of the list when the input loses focus', () => {
      cy.getTestId('todo-input-new')
        .type('Some text')
        // .blur();

      // cy.getTestId('todo-list')
      //   .findTestId('todo')
      //   .should($todos => expect($todos.length).to.equal(1))
      //   .eq(0)
      //   .should('have.text', 'Some text');
    });
  });
});
