import { AddPartenaireService } from './../services/add-partenaire.service';
import { Component, OnInit } from '@angular/core';
import { AddUserService } from './../services/addUserService/add-user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserData = {imageFile :File=null};
  profil= ['admin', 'user', 'caissier']
  imageUrl:string ="/assets/imgch/hom.jpeg";
  fileToUpload : File= null;
  constructor(private addUserService: AddUserService) { }

  ngOnInit() {
  }
  handleFileInput(file: FileList){
    this.addUserData.imageFile= file.item(0);
    var reader= new FileReader();

    reader.onload= (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.addUserData.imageFile);
  }
  addUser(){
    this.addUserService.addUser(this.addUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
