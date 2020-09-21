import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import {FamiliarsModule} from './familiars/familiars.module';
import { FamiliarsServiceService } from './familiars/familiars-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MastersModule} from './masters/masters.module';
import {MasterService} from './masters/master.service';
import {AddServantComponent} from './masters/add-servant/add-servant.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FamiliarsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MastersModule
  ],
  providers: [FamiliarsServiceService,MasterService],
  entryComponents:[AddServantComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
