import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ACTIONS, Action } from '../reducer/food-reducer';
import { of, Observable } from 'rxjs';
import { FoodServiceService } from '../service/food-service.service';
@Injectable()
export class FoodEffects {


  constructor(private service: FoodServiceService,
    private actions$: Actions) { }

  /* getFoods$ = createEffect(() =>
   this.actions$.pipe(
     ofType(ACTIONS.GET_FOODS),
     mergeMap(() =>
       this.service.getFoods().pipe(
         map((data) => ({ type: ACTIONS.GET_FOODS_SUCCESS, payload: data })),
         catchError(() => of({ type: ACTIONS.GET_FOODS_FAILED }))
       )
     )
   )
 );*/

  getFoods: Observable<Action> = this.actions$.pipe(
    ofType(ACTIONS.GET_FOODS),
    mergeMap(action =>
      this.service.getFoods().pipe(
        map(data => ({ type: ACTIONS.GET_FOODS_SUCCESS, payload: data })),
        catchError(() => of({ type: ACTIONS.GET_FOODS_FAILED }))
      )
    )

  );


}