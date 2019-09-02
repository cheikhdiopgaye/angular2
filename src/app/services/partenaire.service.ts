import { AthenticationService } from './../athentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  public ListepartUrl = "http://localhost:8000/api/partenaires";
  
  constructor(private http: HttpClient, private authService: AthenticationService) { }
  getPartenaires() :Observable<any> {

    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.ListepartUrl, {headers:headers})
  }
  
}