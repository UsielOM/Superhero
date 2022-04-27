import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './service/heroes.service';
import { InfoheroeComponent } from './components/infoheroe/infoheroe.component';

@NgModule({
  declarations: [
    HomepageComponent,
    JumbotronComponent,
    AboutComponent,
    HeroesComponent,
    InfoheroeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers:[
    HeroesService
  ]
})
export class HomeModule { }
