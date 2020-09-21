import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FamiliarsListComponent} from '../app/familiars/familiars-list/familiars-list.component';
import {FamiliarDetailComponent} from '../app/familiars/familiar-detail/familiar-detail.component';
import {NewFamiliarComponent} from '../app/familiars/new-familiar/new-familiar.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'familiars', component : FamiliarsListComponent},
  {path: 'familiars/:id', component : FamiliarDetailComponent},
  {path: 'newfamiliar', component : NewFamiliarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
