import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamiliarsListComponent } from './familiars-list/familiars-list.component';
import { FamiliarDetailComponent } from './familiar-detail/familiar-detail.component';
import {FormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from '.././app-routing.module';
import { NewFamiliarComponent } from './new-familiar/new-familiar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [FamiliarsListComponent, FamiliarDetailComponent, NewFamiliarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports:[
    FamiliarsListComponent,
    FamiliarDetailComponent
  ]
})
export class FamiliarsModule {


}
