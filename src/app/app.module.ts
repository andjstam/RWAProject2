import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card'; 

import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { DirectorComponent } from './components/director/director.component';
import { UserComponent } from './components/user/user.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AuthRoleGuard } from './services/auth-role.guard'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects'
import { DirectorEffects} from './store/effects/director.effects'
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { ProfilReziserComponent } from './components/profil-reziser/profil-reziser.component';
import { PretragaOglasiComponent } from './components/pretraga-oglasi/pretraga-oglasi.component';
import { ProfilKorisnikComponent } from './components/profil-korisnik/profil-korisnik.component';
import { CreateEventComponent } from './components/create-event/create-event.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegistrationComponent,
    DirectorComponent,
    UserComponent,
    SearchUsersComponent,
    ProfilReziserComponent,
    PretragaOglasiComponent,
    ProfilKorisnikComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects, DirectorEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers:[
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    AuthRoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
