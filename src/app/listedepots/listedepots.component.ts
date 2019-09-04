import { DepotService } from './../services/depotService/depot.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listedepots',
  templateUrl: './listedepots.component.html',
  styleUrls: ['./listedepots.component.css']
})
export class ListedepotsComponent implements OnInit {
  depots = [];
  constructor(private depotService: DepotService, private router: Router) { }

  ngOnInit() {
    this.depotService.getDepots()

      .subscribe(

        res => this.depots = res,
        err => {
          console.log(this.depots)
          if (err instanceof HttpErrorResponse){
            if(err.status === 401){
              this.router.navigate(['/login'])
            }
          }
        }
      )
  }

}
