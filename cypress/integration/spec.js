describe('page', () => {
  it('notworking', () => {
  	cy.visit("/reference/tags/input-number.html");
  	cy.get("input[type=number][name=age]").type("3");

  })
})
