import { AthenticationService } from './../athentication.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {

  constructor(private http: HttpClient, private authService: AthenticationService) { }
  envoie(data) {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const envoieUrl = "http://localhost:8000/api/envoie";

    return this.http.post(envoieUrl, data, {headers:headers})
  }
}
