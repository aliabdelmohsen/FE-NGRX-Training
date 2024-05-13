import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { food_reducer } from './food/reducer/food-reducer';
import { FoodListComponent } from './food/component/food-list/food-list.component';
import { FoodFormComponent } from './food/component/food-form/food-form.component';
import { FoodEffects } from './food/effect/food.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FoodServiceService } from './food/service/food-service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ foods: food_reducer }),
    EffectsModule.forRoot([FoodEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 12 })
  ],
  providers: [FoodServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
