import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes propios
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/rutas/heroes.component';
import { HeroeComponent } from './componentes/heroe/heroe.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},

  {path: '**', pathMatch: 'full', redirectTo:'home'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
