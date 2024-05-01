describe('overall', () => {
  it('works', () => {
    cy.visit('/');
  })
})

//TODO fix units with same ids AND names, fix csv size by filtering out useless columns
// describe('for each unit', { testIsolation: false }, () => {
//   before(() => {
//     cy.visit('/');

//     cy.get('#unit-page-button').click();
//     cy.get('#showids').check();

//     cy.get('#unit-page .slick-header-column:has(.slick-column-name:contains("id"))').click();
//   });

//   const units = Cypress.env('units');

//   units.forEach((unit) => {
//     it('renders fixed overlay for unit: ' + unit.id, () => {
//       cy.get('#unit-page .slick-row .slick-cell.l0:contains("' + unit.id + '")').click();

//       cy.get('#unit-page .fixed-overlay .overlay-header').should('have.attr', 'title', 'unit id:'+unit.id);

//       cy.get('#unit-page .fixed-overlay .unit .id td').should('contain', ''+unit.id);
//     })
//   });

//   afterEach(() => {
//     cy.get('#global-unpin-all-btn').click();
//   })
// })
