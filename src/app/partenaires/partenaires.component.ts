import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {
  partenaires = [];
  constructor(private _partService: PartenaireService, private _router: Router) { }

  ngOnInit() {
    this._partService.getPartenaires()

      .subscribe(

        res => this.partenaires = res,
        err => {
          console.log(this.partenaires)
          if (err instanceof HttpErrorResponse){
            if(err.status === 401){
              this._router.navigate(['/login'])
            }
          }
        }
      )
    }

  }
