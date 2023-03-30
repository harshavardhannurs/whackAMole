import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home/home.component";
import { StartComponent } from "./start/start/start.component";
import { GameStartedComponent } from "./game-started/game-started.component";
import { GameOverComponent } from "./game-over/game-over.component";
import { PlayComponent } from "./game-started/play/play.component";

const appRoutes:Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'start', component:StartComponent},
    {path:'game-started', component:GameStartedComponent, children:[
        {path:'play', component:PlayComponent}
    ]},
    {path:'game-over', component:GameOverComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes, {useHash:true})],
    exports:[RouterModule]
})

export class RoutingModule{}