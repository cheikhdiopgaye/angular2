import { AthenticationService } from './../athentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AthenticationService, private router: Router) { }
  
  ngOnInit() {
  }
  onLogin(data) {
    this.authService.login(data)
      .subscribe(resp => {
          let jwt = resp.body['token'];
          this.authService.saveToken(jwt);
          this.router.navigateByUrl("/Entreprise");
      }, err => {

      });
  }

}
