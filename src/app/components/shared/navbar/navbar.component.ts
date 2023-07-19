import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

//heroes: any[]=[];
export class NavbarComponent {
  nombreBusqueda: string = "";
  heroesEncontrados: Heroe[] = [];

  constructor(private heroesService: HeroesService) {}

  buscarHeroes() {
    this.heroesEncontrados = this.heroesService.buscarHeroes(this.nombreBusqueda);
  }
}
