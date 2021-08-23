/// <reference types="cypress" />


describe('Prime Median calculator Tests', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000')
  })
// 1) Improvement - when text is null or blank and submit button is cliked , the page goes to loop refresh and no error message is displayed  
// 2) Number with one no medians
  it('Number with one no prime no. medians', () => {
  
    cy.get('input')
      .type('1')
      cy.wait(2000)
      cy.contains('Submit').click()
      cy.get('h2')
       .should('have.text', 'The median is: [,]')
  })
  // 3) Number with 1 median
  it('Number with 1 prime no median', () => {
    cy.get('input')
      .type('3')
      cy.wait(2000)
      cy.contains('Submit').click()
      cy.get('h2')
      .should('have.text', 'The median is: [2]')
  })
 // 4) Number with two or more Medians - 4
  it('Number with two or more prime no Medians', () => {
    cy.get('input')
      .type('4')
       cy.wait(2000)
       cy.contains('Submit').click()
       cy.get('h2')
      .should('have.text', 'The median is: [2,3]')

  })
  // 5) Median of a decimal number
  it('Prime Median of a decimal number', () => {
    cy.get('input')
      .type('4.6')
      cy.wait(2000)
      cy.contains('Submit').click()
      cy.get('h2')
      .should('have.text', 'The median is: [2,3]')
  })
  // 6) Improvement - Number greater than the value of permitted in the text box - should give an error message
  it('Prime no Median of a number greater than permissible limit', () => {
    cy.get('input')
      .type('4444444444444444444444444444444444444444444444444444444444444')
      cy.wait(2000)
      cy.contains('Submit').click()
      cy.get('h2')
    .should('have.text', 'The median is: []')
  })
  })

