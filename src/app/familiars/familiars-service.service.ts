import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {Familiar} from './familiar';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FamiliarsServiceService {

  API_URL: string = "https://localhost:44301/api";
  famClass: string[] = [
    "Saber","Archer","Berserker","Caster","Lancer","Rider","Assassin"
      ];


  constructor(private httpClient: HttpClient) { }

  getFamiliars(){

    // return this.httpClient.get('http://newsapi.org/v2/top-headlines?sources=techcrunch&amp;apiKey='+this.API_KEY);
    return this.httpClient.get<Familiar[]>(this.API_URL+"/familiars");

  }

  getFamiliarById(id:string){
    return this.httpClient.get<Familiar>(this.API_URL+"/familiars/"+id);
  }

  postFamiliar(fam: Familiar)
  {
    return this.httpClient.post(this.API_URL+"/familiars",fam).subscribe(err=>console.log(err)
    );
  }

}
