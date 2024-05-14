import { IFood } from "cypress/model/IFood";

describe('Foods', () => {

    
    it('Should add anew food', () => {
var food:IFood={
    id:11,
    name: 'chicken',
    description: 'chicken_desc',
    color: 'brown',
    group: 'chicken_group'
}
        cy.addFood(food)

        cy.contains('List of Foods : 1');

    })
})