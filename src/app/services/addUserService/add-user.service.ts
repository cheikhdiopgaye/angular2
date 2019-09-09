import { AthenticationService } from './../../athentication.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http: HttpClient, private authService: AthenticationService) { }
  addUser(data) {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const addUserUrl = "http://localhost:8000/api/AjoutCaissier";
    const formData: FormData = new FormData();
    formData.append('username', data.username);
    formData.append('plainPassword', data.plainPassword);
    formData.append('nom', data.nom);
    formData.append('prenom', data.prenom);
    formData.append('adresse', data.adresse);
    formData.append('telephone', data.telephone);
    formData.append('email', data.email);
    formData.append('imageFile', data.imageFile);

    return this.http.post(addUserUrl, formData, {headers:headers})
  }
}
