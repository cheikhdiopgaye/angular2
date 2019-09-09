import { ListedepotsComponent } from './listedepots/listedepots.component';
import { Accueil1Component } from './accueil1/accueil1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { AddPartComponent } from './add-part/add-part.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DepotComponent } from './depot/depot.component';
import { AjoutcompteComponent } from './ajoutcompte/ajoutcompte.component';
import { EnvoieComponent } from './envoie/envoie.component';


const routes: Routes = [
  /* {
    path: "",
    pathMatch: 'full'
  }, */

  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'Entreprise',
    component : PartenairesComponent
  },
  {
    path : 'addPartenaire',
    component: AddPartComponent
  },
  {path: 'addUser', component: AddUserComponent},
  {path:'accueil1', component: Accueil1Component},
  {path: 'listeUser', component: UtilisateursComponent},
  {path: 'depot', component: DepotComponent},
  {path: 'listedepots', component: ListedepotsComponent},
  {path:'compte', component: AjoutcompteComponent},
  {path: 'addUtilisateur', component: UtilisateursComponent},
  {path: 'envoie', component: EnvoieComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
