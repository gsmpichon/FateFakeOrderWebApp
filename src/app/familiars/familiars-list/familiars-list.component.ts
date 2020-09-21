import { Component, OnInit,AfterViewInit } from '@angular/core';
import {FamiliarsServiceService} from '../familiars-service.service';
import {Familiar} from '../familiar';
import {Observable} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-familiars-list',
  templateUrl: './familiars-list.component.html',
  styleUrls: ['./familiars-list.component.scss']
})
export class FamiliarsListComponent implements OnInit {

  articles:any[];
  olRayt:string[];
  familiars: MatTableDataSource<Familiar>;
  familiar:Familiar;
  columnsToDisplay = ['id', 'name','class','edit'];
  constructor(private route: ActivatedRoute,private router:Router,private _ffs:FamiliarsServiceService ) { }



  ngOnInit(): void {
   this.onLoading();
  }

  onLoading(){
    // this._ffs.getFamiliars().pipe(
    //   map((x: any) => JSON.parse(x)) // Convert your response from JSON to an Object
    // .subscribe((data: Familiar[]) => {
    //   this.familiars.next(data.hydra.member);
    // })

    this._ffs.getFamiliars().subscribe((res) =>{
      this.familiars = new MatTableDataSource<Familiar>(res);
    console.log(this.familiar);
    console.log(res);

    });
  }
  edit(id:string){

  }

  applyFilter(event: Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.familiars.filter = filterValue.trim().toLowerCase();
  }

  goToEdit(id: number)
  {

  }
}
