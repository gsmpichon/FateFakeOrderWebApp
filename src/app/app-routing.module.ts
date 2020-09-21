import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FamiliarsListComponent} from '../app/familiars/familiars-list/familiars-list.component';
import {FamiliarDetailComponent} from '../app/familiars/familiar-detail/familiar-detail.component';
import {NewFamiliarComponent} from '../app/familiars/new-familiar/new-familiar.component';
import {ServantByIdComponent} from '../app/masters/servant-by-id/servant-by-id.component';
import {MastersListComponent} from '../app/masters/masters-list/masters-list.component';
import {MasterDetailComponent} from '../app/masters/master-detail/master-detail.component';
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'familiars', component : FamiliarsListComponent},
  {path: 'familiars/:id', component : FamiliarDetailComponent},
  {path: 'newfamiliar', component : NewFamiliarComponent},
  {path: 'servants/:id', component : ServantByIdComponent},
  {path: 'masters', component : MastersListComponent},
  {path: 'masters/:id', component : MasterDetailComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
