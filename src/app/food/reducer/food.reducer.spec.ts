import { IFood, Action, ACTIONS, food_reducer } from "./food-reducer";

describe('Food Reducer', () => {
  it('should add food to new state', () => {
  let initialState: Array<IFood> = [];

  let apple: IFood = {
    id: 0,
    name: "apple",
    description: "appleDesc",
    color: "red",
    group: "fruit"
  }

  let addAction: Action = {
    type: ACTIONS.ADD_FOOD,
    payload: apple
  }

  let newState = food_reducer(initialState, addAction)

  expect(initialState.length).toBe(0);
  expect(newState.length).toBe(1);
  expect(newState[0].name).toContain("apple");

  });
  
  it('should remove an existing food from state', () => {
    let initialState: Array<IFood> = [];

    let apple: IFood = {
      id: 0,
      name: "apple",
      description: "appleDesc",
      color: "red",
      group: "fruit"
    }

    let bannana: IFood = {
      id: 1,
      name: "bannana",
      description: "bannanaDesc",
      color: "yellow",
      group: "fruit"
    }

    let appleAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: apple
    }


    let firstUpdateState = food_reducer(initialState, appleAction)
    let secondUpdateState = food_reducer(firstUpdateState, { type: ACTIONS.ADD_FOOD, payload: bannana })

    expect(initialState.length).toBe(0);
    expect(firstUpdateState.length).toBe(1);
    expect(secondUpdateState.length).toBe(2);

    let thirdUpdateState = food_reducer(secondUpdateState, { type: ACTIONS.REMOVE_FOOD, payload: { id: 0 } })
    expect(thirdUpdateState.length).toBe(1);

    console.log(firstUpdateState);
    console.log(secondUpdateState);
    console.log(thirdUpdateState);

  });
});