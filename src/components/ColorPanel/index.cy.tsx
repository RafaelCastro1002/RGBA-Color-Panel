import React from 'react'
import ColorPanel, { BackgroundRGBA } from './index'

describe('<ColorPanel />', () => {
  it('renders', () => {
    const background: BackgroundRGBA = {
      red: 180,
      green: 250,
      blue: 200,
      alpha: 1
    }
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ColorPanel background={background} />)
  })
})