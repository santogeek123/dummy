context ('Summary page tests', () => {

    before(() => {
        cy.visit ('/summary')
        .wait(2000)
      })
    
    it('Checking all Elements exist', () => {
        cy.get('.navbar-text').should('not.be.visible')
        cy.get('button')
          .should('contain', 'Go back to Dashboard').click(); 
         
      });
  });