describe('overall', () => {
  it('works', () => {
    cy.visit('/');
  })
})

describe('for each spell', { testIsolation: false }, () => {
  before(() => {
    cy.visit('/');

    cy.get('#spell-page-button').click();
    cy.get('#showids').check();
  });

  const spells = Cypress.env('spells');

  spells.forEach((spell) => {
    if(spell.school == -1) {
      return
    };

    it('renders fixed overlay for spell: ' + spell.id, () => {
      cy.get('#spell-page .slick-row .slick-cell.l0:contains("' + spell.id + '")').click();

      cy.get('#spell-page .fixed-overlay .overlay-header').should('have.attr', 'title', 'spell id:'+spell.id);

      cy.get('#spell-page .fixed-overlay .spell-table .id td').should('contain', ''+spell.id);
    })
  });

  afterEach(() => {
    cy.get('#global-unpin-all-btn').click();
  })
})
