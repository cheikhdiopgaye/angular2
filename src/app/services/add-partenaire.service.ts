import { Injectable } from '@angular/core';
import { AthenticationService } from './../athentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPartenaireService {

 
  
  constructor(private http: HttpClient, private authService: AthenticationService) { }
  addPartenaire(data) {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const addPartUrl = "http://localhost:8000/api/Entreprise";
    const formData: FormData = new FormData();
    formData.append('imageFile', data.imageFile);
    formData.append('ninea', data.ninea);
    formData.append('adress', data.adress);
    formData.append('telephon', data.telephon);
    formData.append('username', data.username);
    formData.append('plainPassword', data.plainPassword);
    formData.append('nom', data.nom);
    formData.append('prenom', data.prenom);
    formData.append('adresse', data.adresse);
    formData.append('telephone', data.telephone);
    formData.append('email', data.email);
    formData.append('raisonSocial', data.raisonSocial);
    return this.http.post(addPartUrl, formData, {headers:headers})
  }
  
}
