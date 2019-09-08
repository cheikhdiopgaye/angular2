import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compteService/compte.service';

@Component({
  selector: 'app-ajoutcompte',
  templateUrl: './ajoutcompte.component.html',
  styleUrls: ['./ajoutcompte.component.css']
})
export class AjoutcompteComponent implements OnInit {
 addcompteData;
  constructor(private compteService: CompteService, private router: Router) { }

  ngOnInit() {
  }
  addCompte(){
   this.compteService.addCompte(this.addcompteData)
    .subscribe(
      res => {console.log(res)
       this.router.navigateByUrl("/Entreprise");
      },
      err => console.log(err)
    )
  }

}
