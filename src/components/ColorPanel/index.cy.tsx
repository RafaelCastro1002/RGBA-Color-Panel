import React from "react";
import ColorPanel, { BackgroundRGBA } from "./index";

describe("<ColorPanel />", () => {
  it("render correct color in Panel", () => {
    const background: BackgroundRGBA = {
      red: 180,
      green: 250,
      blue: 200,
      alpha: 0.8,
    };
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ColorPanel background={background} />);

    const colorPanel = cy.get('[data-cy="color-panel"]');

    colorPanel.should(
      "have.css",
      "background-color",
      `rgba(${background.red}, ${background.green}, ${background.blue}, ${background.alpha})`
    );
  });

  it("render transparent Panel", () => {
    const background: BackgroundRGBA = {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0,
    };
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ColorPanel background={background} />);

    const colorPanel = cy.get('[data-cy="color-panel"]');

    colorPanel.should(
      "have.css",
      "background-color",
      `rgba(${background.red}, ${background.green}, ${background.blue}, ${background.alpha})`
    );
  });
});
