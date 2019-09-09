import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EnvoieService } from '../services/envoie.service';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.css']
})
export class EnvoieComponent implements OnInit {

  constructor(private envoieService: EnvoieService) { }
  envoieData={};
  ngOnInit() {
  }
  envoie(){
    this.envoieService.envoie(this.envoieData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
