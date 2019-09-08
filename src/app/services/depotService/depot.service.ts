import { AthenticationService } from './../../athentication.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService {
  public depotUrl = "http://localhost:8000/api/depots";
  constructor(private http: HttpClient, private authService: AthenticationService) { }
  depot(data) {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const depotUrl = "http://localhost:8000/apii/depot";

    return this.http.post(depotUrl, {headers:headers})
  }

  getDepots() :Observable<any> {

    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.depotUrl, {headers:headers})
  }
}
