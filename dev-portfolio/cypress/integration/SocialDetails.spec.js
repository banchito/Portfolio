describe('SocialDetails', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('have correct social links', () => {
    cy.get("[data-testid='github']").should(
      'have.attr',
      'href',
      'https://github.com/banchito'
    );
    cy.get("[data-testid='linkedin']").should(
      'have.attr',
      'href',
      'https://www.linkedin.com/in/banchito/'
    );
    // cy.get("[data-testid='visit']").should(
    //   'have.attr',
    //   'href',
    //   'https://www.linkedin.com/in/banchito/'
    // );
    cy.get("[data-testid='source-code']").should(
      'have.attr',
      'href',
      'https://github.com/banchito'
    );
  });
});
