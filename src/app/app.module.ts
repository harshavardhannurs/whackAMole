import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { StartComponent } from './start/start/start.component';
import { GameStartedComponent } from './game-started/game-started.component';
import { GameOverComponent } from './game-over/game-over.component';
import { PlayComponent } from './game-started/play/play.component';
import { HolesComponent } from './game-started/play/holes/holes/holes.component';
import { HoleComponent } from './game-started/play/holes/holes/hole/hole.component';
import { MoleDisplayDirective } from './directives/mole-display.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    GameStartedComponent,
    GameOverComponent,
    PlayComponent,
    HolesComponent,
    HoleComponent,
    MoleDisplayDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
