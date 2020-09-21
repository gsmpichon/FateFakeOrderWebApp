import { Component, OnInit } from '@angular/core';
import {Servant} from '../servant';
import {MasterService} from '../master.service';
import { ActivatedRoute,Router } from '@angular/router';
import {MatInput} from '@angular/material/input';
@Component({
  selector: 'app-servant-by-id',
  templateUrl: './servant-by-id.component.html',
  styleUrls: ['./servant-by-id.component.scss']
})
export class ServantByIdComponent implements OnInit {

  detailedServant:Servant;
  servantId: string;

  constructor(private route: ActivatedRoute,private router:Router,private _masterService: MasterService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.servantId = params.get('id');
    });
    this.onLoading(this.servantId);
  }

  onLoading(id:string)
  {
    this._masterService.getServantByID(id).subscribe(
      res => {
        console.log(res);
        this.detailedServant = res;}
    );
  }



}
