import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { SupAdminComponent } from './sup-admin/sup-admin.component';
import { Accueil1Component } from './accueil1/accueil1.component';
import { AddPartComponent } from './add-part/add-part.component';
import { FooterComponent } from './footer/footer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatTableModule} from '@angular/material';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DepotComponent } from './depot/depot.component';
import { ListedepotsComponent } from './listedepots/listedepots.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    PartenairesComponent,
    SupAdminComponent,
    Accueil1Component,
    AddPartComponent,
    FooterComponent,
    AddUserComponent,
    UtilisateursComponent,
    DepotComponent,
    ListedepotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
