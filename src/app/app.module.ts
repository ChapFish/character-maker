import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { SearcherService } from './searcher.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatusViewComponent } from './status-view/status-view.component';
import { AbilityComponent } from './ability/ability.component';
import { CharacterComponent } from './character/character.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent,
    SidebarComponent,
    StatusViewComponent,
    AbilityComponent,
    CharacterComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SearcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
