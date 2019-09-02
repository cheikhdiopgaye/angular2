import { AddPartenaireService } from '../services/add-partenaire.service';
import { Component, OnInit } from '@angular/core';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {
  addPartData = {imageFile :File=null};
  imageUrl:string ="/assets/img/index.png";
  fileToUpload : File= null;
  constructor(private addpartService: AddPartenaireService ) { }

  ngOnInit() {
  }


  handleFileInput(file: FileList){
    this.addPartData.imageFile= file.item(0);
    var reader= new FileReader();

    reader.onload= (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.addPartData.imageFile);
  }
  addPartenaire(){
    this.addpartService.addPartenaire(this.addPartData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
