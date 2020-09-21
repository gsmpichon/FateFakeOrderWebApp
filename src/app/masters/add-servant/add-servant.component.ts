import { Component, Inject, OnInit } from '@angular/core';

import {ServantDTO} from '../servant-dto';
import {MasterService} from '../master.service';
import {Familiar} from '../../familiars/familiar';
import {FamiliarsServiceService} from '../../familiars/familiars-service.service';

import {MatTableDataSource} from '@angular/material/table'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-servant',
  templateUrl: './add-servant.component.html',
  styleUrls: ['./add-servant.component.scss']
})
export class AddServantComponent implements OnInit {

  createServant:ServantDTO = {
    id: 0,
    masterId: 0,
    familiarId:0
  };

  familiarList:MatTableDataSource<Familiar>;
  familiarColumns:string[] = ["name","class"];
  chosenFamiliar:Familiar = new Familiar();
  masterId:number;
  pickedStatus:boolean = true;


  constructor(private _ffs:FamiliarsServiceService,public dialogRef: MatDialogRef<AddServantComponent>,@Inject(MAT_DIALOG_DATA) data:any, private _masterService:MasterService) {
    this.masterId = data.masterId;
   }

  ngOnInit(): void {
    this.onLoading();
  }

  onLoading(){
    this.getFamiliarTable();
    console.log("MASTER ID: "+this.masterId);

  }

  getFamiliarTable(){
    this._ffs.getFamiliars().subscribe((res)=>{
      this.familiarList = new MatTableDataSource<Familiar>(res);
      console.log(res);
      console.log(this.familiarList);

    });
    console.log(this.masterId);
  }

  setFamiliarToCreate(familiarPicked:Familiar)
  {
    this.chosenFamiliar = familiarPicked;
    this.createServant.familiarId = familiarPicked.id;
    this.pickedStatus = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  summonServant(){
    this.createServant.masterId = Number(this.masterId);
    console.log(this.createServant);
    this._masterService.addServant(this.createServant);

  }
}
