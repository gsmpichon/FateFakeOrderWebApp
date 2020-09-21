import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import {MasterService} from '../master.service';
import { AddServantComponent} from '../add-servant/add-servant.component';

import {Master} from '../master';
import {Servant} from '../servant';
import {ServantDTO} from '../servant-dto';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  detailedMaster:Master ={
    id:0,
    name:'',
    servants:null
  };
  masterId:string;
  servants:MatTableDataSource<Servant>;

  familiarTableColumns:string[] = ["familiarName","familiarClass","deleteFamiliar"];
  constructor(private route: ActivatedRoute,private router:Router,private _masterService:MasterService, private dialog:MatDialog ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.masterId = params.get('id');
    });

    this.onLoading();
  }

  onLoading()
  {
    this._masterService.getMasterById(this.masterId).subscribe((res)=>{
      this.detailedMaster = res;
      console.log(res)
      this.servants = new MatTableDataSource<Servant>(res.servants);
    });

    console.log(this.detailedMaster);
    // this.servants = new MatTableDataSource<Servant>(this.detailedMaster.servants);

  }

  addDialog():void{
    const dialogFamiliar = this.dialog.open(AddServantComponent,{
      width:'500px',
      height:'400px',
      data:{masterId: this.masterId}
    });

    dialogFamiliar.afterClosed().subscribe(()=>{this.onLoading();});
  }

  deleteServant(servantToDelete:Servant){
    this._masterService.deleteServant(servantToDelete.id);
    this.onLoading();
  }

}
