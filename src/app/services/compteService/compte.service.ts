import { AthenticationService } from './../../athentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  public addCompteUrl = "http://localhost:8000/api/AjoutCompte";
  constructor(private http: HttpClient, private authService: AthenticationService) { }
  addCompte(data) {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.post(this.addCompteUrl, data, {headers:headers})
  }
}
