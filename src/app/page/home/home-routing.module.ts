import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InfoheroeComponent } from './components/infoheroe/infoheroe.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {path: '', component:HomepageComponent,
children: [
  {
    path:'', component:JumbotronComponent
  },
  {path:'about', component:AboutComponent},
  {path:'heroes', component:HeroesComponent},
  {path: 'info/:id', component:InfoheroeComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
