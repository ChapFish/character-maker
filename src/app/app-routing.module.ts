import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { AbilityComponent } from './ability/ability.component';
import { CharacterComponent } from './character/character.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'ability', component: AbilityComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'start', component: DiceRollComponent },
  { path: 'view', component: ViewComponent },
  { path: "", redirectTo: "./start", pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
