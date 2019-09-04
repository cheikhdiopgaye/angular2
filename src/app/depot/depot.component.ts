import { Component, OnInit } from '@angular/core';
import { DepotService } from './../services/depotService/depot.service';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  depotData = {};
  constructor(private depotService: DepotService) { }

  ngOnInit() {
  }
  depot(){
    this.depotService.depot(this.depotData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


}
