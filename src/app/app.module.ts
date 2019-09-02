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
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
