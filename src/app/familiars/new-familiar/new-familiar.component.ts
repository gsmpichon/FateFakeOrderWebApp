import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Familiar} from '../familiar';
import {FamiliarsServiceService} from '../familiars-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-familiar',
  templateUrl: './new-familiar.component.html',
  styleUrls: ['./new-familiar.component.scss']
})
export class NewFamiliarComponent implements OnInit {

  famClass: string[];
  newFamiliar: Familiar = {
    id: 0,
    name: '',
    class: ''
  };
  constructor(private route: ActivatedRoute,private router:Router,private _ffs:FamiliarsServiceService) {
  }

  ngOnInit(): void {
    this.famClass = this._ffs.famClass;
  }

  onSubmit(form: NgForm)
  {
    if(this.newFamiliar.name != '' && this.newFamiliar.class != ''){
      this.postNewFamiliar();
    }
  }

  postNewFamiliar()
  {
    this._ffs.postFamiliar(this.newFamiliar);
  }

}
