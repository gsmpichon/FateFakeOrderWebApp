import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Familiar} from '../familiar';
import {FamiliarsServiceService} from '../familiars-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-familiar-detail',
  templateUrl: './familiar-detail.component.html',
  styleUrls: ['./familiar-detail.component.scss'],
  exportAs: 'appFamiliarDetail'
})
export class FamiliarDetailComponent implements OnInit {

  famClass: string[];
  detailFamiliar: Familiar;
  familiarId: string;
  constructor(private route: ActivatedRoute,private router:Router,private _ffs:FamiliarsServiceService) {
  }
  resetForm(form: NgForm)
  {
    form.resetForm();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.familiarId = params.get('id');
    });
    console.log(this.familiarId);
    this.onLoading(this.familiarId);
    this.famClass = this._ffs.famClass;
  }

  onLoading(id:string){
    let testFamiliar:Familiar;

    this._ffs.getFamiliarById(id).subscribe((res) =>{
      testFamiliar = res;
      this.detailFamiliar = testFamiliar;
      console.log(res);
    console.log(this.detailFamiliar);

    });

    if (this.detailFamiliar) {
      this.router.navigate(['familiars']);
    } else {

    }

  }

  backToList(){
    this.router.navigate(['familiars']);
  }

  onSubmit(form: NgForm){
      if(this.detailFamiliar.id > 0)
      {
        this.updateFamiliar();
      }
  }

  updateFamiliar()
  {
    this._ffs.postFamiliar(this.detailFamiliar);

  }

}
