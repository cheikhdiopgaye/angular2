import { AthenticationService } from './athentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angularprojet';
constructor(private authService: AthenticationService){}
  ngOnInit(): void {
    this.authService.loadToken();
  }
  isSuperAdmin(){
    return this.authService.isSuperAdmin();
  }
  isAdminPart(){
    return this.authService.isAdminPart();
  }
  isCaissier(){
    return this.authService.isCaissier();
  }
  isUtilisateur(){
    return this.authService.isUtilisateur();
  }
  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
  LogOut(){
    this.authService.LogOut();
  }

}
