import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-infoheroe',
  templateUrl: './infoheroe.component.html',
  styleUrls: ['./infoheroe.component.css']
})
export class InfoheroeComponent implements OnInit {
heroe: any = {};
  constructor( private activateRoute: ActivatedRoute,private _heroesService: HeroesService ) { 

    this.activateRoute.params.subscribe(params =>{
      // console.log(params['id']) // veamos como se imprimen los parametros 
      this.heroe = this._heroesService.getHero( params['id'] );

      console.log(this.heroe)
    })
  }

  ngOnInit(): void {
  }

}
