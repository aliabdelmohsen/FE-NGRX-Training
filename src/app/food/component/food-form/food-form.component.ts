import { Component, OnInit } from '@angular/core';
import { IFood, MyAppState, ACTIONS, Action } from '../../reducer/food-reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

  food: IFood = {} as IFood;

  constructor(private store: Store<MyAppState>) { }

  ngOnInit(): void {
  }

  addFood(food: IFood) {
    let addAction: Action = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({}, food)
    }

    this.store.dispatch(addAction)

  }
}
