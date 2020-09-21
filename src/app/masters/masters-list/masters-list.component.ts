import { Component, OnInit } from '@angular/core';
import {Master} from '../master';
import {MasterService} from '../master.service';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-masters-list',
  templateUrl: './masters-list.component.html',
  styleUrls: ['./masters-list.component.scss']
})
export class MastersListComponent implements OnInit {

  masterList:MatTableDataSource<Master>;
  columnsToDisplay:string[] = ['id','name','edit'];
  constructor(private route: ActivatedRoute,private router:Router,private _masterService:MasterService) { }


  ngOnInit(): void {
    this.onLoading();
  }


  onLoading(){
    this._masterService.getMasters().subscribe((res)=>{
      this.masterList = new MatTableDataSource<Master>(res);
    });
  }

}
