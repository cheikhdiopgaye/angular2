import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AthenticationService {

  host2 = 'http://localhost:8000/api/logincheck';
  jwt: string;
  username: string;
  roles: Array<string>;
  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post(this.host2, data, { observe: 'response'});
  }
  LogOut() {
    localStorage.removeItem('token');
      this.initParam();
  }
  initParam(){
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
  saveToken(jwt) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parsJWT();
  }
  parsJWT() {
   const jwtHelper = new JwtHelperService();
   const objJWT = jwtHelper.decodeToken(this.jwt);
   this.username = objJWT.obj;
   this.roles = objJWT.roles;
  }
  isSuperAdmin(){
    return this.roles.indexOf('ROLE_SUPER_ADMIN')>=0;
  }
  isAdminPart(){
    return this.roles.indexOf('ROLE_ADMIN_PART')>=0;
  }
  isCaissier(){
    return this.roles.indexOf('ROLE_CAISSIER')>=0;
  }
  isUtilisateur(){
    return this.roles.indexOf('ROLE_UTILISATEUR')>=0;
  }
  isAuthenticated(){
    return this.roles && (this.isSuperAdmin() || this.isAdminPart() || this.isCaissier() || this.isUtilisateur());
  }
  loadToken(){
    this.jwt= localStorage.getItem('token');
    this.parsJWT();
  }

}
