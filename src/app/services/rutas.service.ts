import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes:Heroe[]=[
    {
      origen: "Machala",
      destino: "Guayaquil",
      precio: "15$",
      descripcion: "Viaje seguro de Machala a Guayaquil",
      tipo:"interno"
    },
    {
      origen: "El Guabo",
      destino: "Huaquillas",
      precio: "10$",
      descripcion: "Viaje Seguro",
      tipo:"interno"
    },
    {
      origen: "Santa Rosa",
      destino: "Tumbes",
      precio: "20$",
      descripcion: "Viaje Seguro",
      tipo:"externo"
    },
    {
      origen: "Guayaquil",
      destino: "Manta",
      precio: "20$",
      descripcion: "Viaje Seguro",
      tipo:"externo"
    },
    {
      origen: "Machala",
      destino: "Ambato",
      precio: "25$",
      descripcion: "Viaje Seguro",
      tipo:"interno"
    },
    {
      origen: "Santa Rosa",
      destino: "Quito",
      precio: "25$",
      descripcion: "Viaje Seguro",
      tipo:"DC"
    },
    {
      origen: "Machala",
      destino: "Arenillas",
      precio: "10$",
      descripcion: "Viaje Seguro",
      tipo:"interno"
    },
    {
      origen: "Machala",
      destino: "Cuenca",
      precio: "20$",
      descripcion: "Viaje Seguro",
      tipo:"interno"
    },
    {
      origen: "Guayaquil",
      destino: "Machala",
      precio: "20$",
      descripcion: "Viaje Seguro",
      tipo:"interno"
    },
    {
      origen: "Quito",
      destino: "Cuenca",
      precio: "20$",
      descripcion: "Viaje Seguro",
      tipo:"interno"
    },
  ];
  getHeroes(){
    return this.heroes;
  }
  getHeroe(idx:number):Heroe{
  return this.heroes[idx];
  }
  //Para Buscar Heroes
  buscarHeroes(nombre: string): Heroe[] {
    const nombreBusqueda = nombre.toLowerCase().trim();
    const heroesEncontrados = this.heroes.filter((heroe) =>
      heroe.origen.toLowerCase().includes(nombreBusqueda)
    );
    console.log(heroesEncontrados)
    return heroesEncontrados;
  }
  
  constructor() {
    console.log("Servicio listo para usar...");
   }
}
export interface Heroe{
  origen: string;
  destino: string;
  precio: string;
  descripcion:string;
  tipo:string
}
