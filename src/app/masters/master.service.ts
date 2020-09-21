import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Servant} from './servant';
import {Master} from './master';
import {ServantDTO} from './servant-dto';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  API_URL: string = "https://localhost:44301/api";

  constructor(private httpClient: HttpClient) { }

  getServantByID(servantId:string)
  {
    return this.httpClient.get<Servant>(this.API_URL+"/servants/"+servantId);
  }

  getMasters()
  {
    return this.httpClient.get<Master[]>(this.API_URL+"/masters");
  }

  getMasterById(id:string)
  {
    return this.httpClient.get<Master>(this.API_URL+"/masters/"+id);
  }

  addServant(servantDTO: ServantDTO)
  {
    return this.httpClient.post(this.API_URL+"/servants",servantDTO).subscribe(err=>console.log(err)
    );
  }

  deleteServant(servantId:number)
  {
    this.httpClient.delete(this.API_URL+"/servants/"+servantId).subscribe(err=>console.log(err));
  }

}
