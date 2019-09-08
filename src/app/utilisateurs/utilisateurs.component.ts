import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './../services/utilisateurSservice/utilisateur.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  constructor( private utilisateurService: UtilisateurService ) { }

  addUtilisateurData = {imageFile :File=null};
  imageUrl:string ="/assets/imgch/hom.jpeg";
  fileToUpload : File= null;
  ngOnInit() {
  }
  handleFileInput(file: FileList){
    this.addUtilisateurData.imageFile= file.item(0);
    var reader= new FileReader();

    reader.onload= (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.addUtilisateurData.imageFile); 
  }
  
  addUtilisateur(){
    this.utilisateurService.addUtilisateur(this.addUtilisateurData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  } 
}
