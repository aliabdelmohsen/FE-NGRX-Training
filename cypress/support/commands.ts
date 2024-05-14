import { IFood } from "cypress/model/IFood";

// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
declare namespace Cypress {
  interface Chainable<Subject = any> {
    customCommand(param: any): typeof addFood;
  }
}

function addFood(food: IFood): void {
    cy.visit('/') // visits the baseUrl
     
    cy.contains('Add anew Food');
    cy.get('input[name="food_id"]').type(food.id);
    cy.get('input[name="food_name"]').type(food.name);
    cy.get('input[name="food_description"]').type(food.description);
    cy.get('input[name="food_color"]').type(food.color);
    cy.get('input[name="food_group"]').type(food.group);

    cy.get('button').click();
}
//
// NOTE: You can use it like so:
Cypress.Commands.add('addFood', addFood);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
