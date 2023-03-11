describe("Home Page Spec", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should increment counter correctly", () => {
    const redButton = cy.get(":nth-child(1) > .sc-eDvSVe");
    const greenButton = cy.get(":nth-child(2) > .sc-eDvSVe");
    const blueButton = cy.get(":nth-child(3) > .sc-eDvSVe");
    const alphaButton = cy.get(":nth-child(4) > .sc-eDvSVe");

    redButton.invoke("val", 200).trigger("change");
    greenButton.invoke("val", 100).trigger("change");
    blueButton.invoke("val", 255).trigger("change");
    alphaButton.invoke("val", 1).trigger("change");
    // cy.get("@range").siblings("p").should("have.text", "25");
    // const times = 10
    // const incrementButton = cy.get('[data-cy="increment-button"]')
    // for (let i = 0; i < times; i++) {
    //   incrementButton.click()
    // }
    // cy.get('[data-cy="counter-value"]').should('have.text', times)

    const colorPanel = cy.get('[data-cy="color-panel"]');

    colorPanel.should("have.css", "background-color", `rgba(200, 100, 255, 1)`);
  });
});
