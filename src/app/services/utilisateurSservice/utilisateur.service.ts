import { Injectable } from '@angular/core';
import { AthenticationService } from './../../athentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient, private authService: AthenticationService) { }
  addUtilisateur(data) {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const addUtilisateurUrl = "http://localhost:8000/api/adduser";
    const formData: FormData = new FormData();
    formData.append('username', data.username);
    formData.append('plainPassword', data.plainPassword);
    formData.append('nom', data.nom);
    formData.append('prenom', data.prenom);
    formData.append('adresse', data.adresse);
    formData.append('telephone', data.telephone);
    formData.append('email', data.email);
    formData.append('imageFile', data.imageFile);
    formData.append('numeroCompte', data.numeroCompte);
    formData.append('profil', data.profil);

    return this.http.post(addUtilisateurUrl, formData, {headers:headers})
  }
}
