import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from '.././app-routing.module';
import {FormsModule} from '@angular/forms';
import {MastersListComponent} from './masters-list/masters-list.component';
import { ServantByIdComponent } from './servant-by-id/servant-by-id.component';
import {MatButtonModule} from '@angular/material/button';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { AddServantComponent } from './add-servant/add-servant.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [ServantByIdComponent,MastersListComponent, MasterDetailComponent, AddServantComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[
    MastersListComponent,
    ServantByIdComponent,
    MasterDetailComponent
  ]
})
export class MastersModule { }
