describe('overall', () => {
  it('works', () => {
    cy.visit('/');
  })
})

describe('for each item', { testIsolation: false }, () => {
  before(() => {
    cy.visit('/');

    cy.get('#showids').check();

    cy.get('#item-page .slick-header-column:has(.slick-column-name:contains("id"))').click();
  });

  const items = Cypress.env('items');

  items.forEach((item) => {
    if(item.constlevel > 9) {
      return
    };

    it('renders fixed overlay for item: ' + item.id, () => {
      cy.get('#item-page .slick-row:has(.slick-cell.l1:contains("' + item.name + '")) .slick-cell.l0:contains("' + item.id + '")').click();

      cy.get('#item-page .fixed-overlay .overlay-header').should('have.attr', 'title', 'item id:'+item.id);

      cy.get('#item-page .fixed-overlay .item .id td').should('contain', ''+item.id);
    })
  });

  afterEach(() => {
    cy.get('#global-unpin-all-btn').click();
  })
})
