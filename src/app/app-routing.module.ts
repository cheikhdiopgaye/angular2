import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { AddPartComponent } from './add-part/add-part.component';


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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
