import { Injectable } from '@angular/core';

@Injectable()

export class HeroesService {

    private heroes: Heroe []=[
    {
        nombre: "Spdier Man",
        bio: "Un gran poder conlleva una gran responsabildiad",
        img: "assets/spiderman.png",
        aparicion: "1962",
        casa: "MARVEL"
    },
    {
        nombre: "AquaMan",
        bio: "Habla con peces ",
        img: "assets/aquaman.png", //Poner bien la ruta de las imagenes
        aparicion: "1969",
        casa: "DC"
    },
    {
        nombre: "Hulk",
        bio: "Hulk aplasta ",
        img: "assets/hulk.png", //Poner bien la ruta de las imagenes
        aparicion: "1969",
        casa: "MARVEL"
    },
    {
        nombre: "BATMAN",
        bio: "Soy la venganza  ",
        img: "assets/batman.png", //Poner bien la ruta de las imagenes
        aparicion: "1969",
        casa: "DC"
    }
  
    ]
constructor(){
    console.log("Servicio para usar !!!")
}


getHeroes():Heroe[]{
//NO SE OLVIDEN DE RETORNRAR COSAS
    return this.heroes;
}

getHero(idx:number){
    
return this.heroes[idx];
}

}

export interface Heroe{

    nombre: string
   bio: string
   img: string
aparicion: string
  casa: string

}