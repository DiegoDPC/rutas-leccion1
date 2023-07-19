import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/rutas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  heroesEncontrados: Heroe[] = [];
  terminoBusqueda: string = '';

  constructor(private heroesService: HeroesService, private router: Router, private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.obtenerHeroes();
  }

  obtenerHeroes(): void {
    this.heroes = this.heroesService.getHeroes();
    this.heroesEncontrados = this.heroes;
  }

  buscarHeroes(): void {
    if (this.terminoBusqueda.trim() !== '') {
      this.heroesEncontrados = this.heroesService.buscarHeroes(this.terminoBusqueda);
    } else {
      this.heroesEncontrados = this.heroes;
    }
  }
  verHeroe(idx: number): void {
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
