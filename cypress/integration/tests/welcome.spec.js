context ('Welcome page tests', () => {

    before(() => {
        cy.visit ('/dashboard')
        .wait(2000)
      })
    
      // viewport
      /* beforeEach(() => {
        cy.viewport(1920, 1080);
      }) */

    it('Header elements exist', () => {
        const title="WEIR";
        cy.get('h4')
          .should('be.visible');
        cy.get('h4')
          .contains(title);
        cy.get('.navbar-text').should('not.be.visible')
      });

    it('Checking all Elements exist', () => {
        cy.get('h2')
          .should('be.visible');
        cy.get('p')
          .should('be.visible');
        cy.get('p')
          .should('be.visible');
        cy.get('button')
          .should('contain', 'Start Test').click();
          
      });
  });