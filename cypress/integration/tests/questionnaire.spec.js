context ('Question page', () => {

    before(() => {
        cy.visit ('/questionnaire')
          .wait(2000);
          cy.request('/config/questions.json').as('questions')
          cy.get('@questions').should((response) => {
            expect(response.body).to.have.length(4)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
            expect(response).to.have.property('status')
            expect(response.status).to.eq(200)
            
          })
      })

      it ('Url check', () => {
        cy.url()
          .should('include', '/questionnaire');
      })

      it ('Time exits', () => {
        cy.get('.navbar-text')
          .should('be.visible')
      })

      it('Questions test', () => {
        cy.get('[name="radio"]')
          .check()

        cy.get('.textarea-control')
          .type('test description')
          .should('have.value', 'test description')
      
        cy.get('.form-check input[type="checkbox"]')
          .check(['class becomes className', 'JSX is a syntax extension to JavaScript']).should('be.checked') 
        
        cy.get('button')
          .should('contain', 'Submit').click();
        cy.contains('Correct Answer')
      })
  });