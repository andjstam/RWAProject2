import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ReziserComponent } from './components/reziser/reziser.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { AuthRoleGuard } from './components/login/auth-role.guard';
import { PretragaKorisniciComponent } from './components/pretraga-korisnici/pretraga-korisnici.component';
import { ProfilReziserComponent } from './components/profil-reziser/profil-reziser.component';
import { ProfilKorisnikComponent } from './components/profil-korisnik/profil-korisnik.component';
import { PretragaOglasiComponent } from './components/pretraga-oglasi/pretraga-oglasi.component';

const routes: Routes = [
    {path: '', redirectTo: '/mainPage', pathMatch: 'full'},
    {path: 'mainPage', component: MainPageComponent},
    {
      path: 'reziser',
      component: ReziserComponent,
      // canActivate:[AuthRoleGuard],
      children: [
        {path: '', component: ProfilReziserComponent },
        {path: 'profil', component: ProfilReziserComponent},
        {path: 'pocetna', component: PretragaKorisniciComponent}
      ],
      data: { role: 'reziser'}
    },
    {
      path: 'korisnik',
      component: KorisnikComponent,
      children: [
        {path: '', component: ProfilKorisnikComponent },
        {path: 'profil', component: ProfilKorisnikComponent},
        {path: 'pocetna', component: PretragaOglasiComponent}
      ],
      //canActivate:[AuthRoleGuard],
      data: { role: 'korisnik'}
    },
    {path: '**', redirectTo: 'mainPage', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
