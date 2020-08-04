import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  constructor(private http:HttpClient) { }

  addCommune(commune){
    return this.http.post("http://localhost:8080/communes",commune,{responseType: 'text' as 'json'});
  }
}
