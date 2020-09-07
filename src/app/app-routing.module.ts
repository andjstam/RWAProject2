import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DirectorComponent } from './components/director/director.component';
import { UserComponent } from './components/user/user.component';
import { AuthRoleGuard } from './services/auth-role.guard';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { ProfilReziserComponent } from './components/profil-reziser/profil-reziser.component';
import { ProfilKorisnikComponent } from './components/profil-korisnik/profil-korisnik.component';
import { PretragaOglasiComponent } from './components/pretraga-oglasi/pretraga-oglasi.component';

const routes: Routes = [
    {path: '', redirectTo: '/mainPage', pathMatch: 'full'},
    {path: 'mainPage', component: MainPageComponent},
    {
      path: 'reziser',
      component: DirectorComponent,
      canActivate:[AuthRoleGuard],
      children: [
        {path: '', component: ProfilReziserComponent },
        {path: 'profil', component: ProfilReziserComponent},
        {path: 'pocetna', component: SearchUsersComponent}
      ],
      data: { role: 'reziser'}
    },
    {
      path: 'korisnik',
      component: UserComponent,
      children: [
        {path: '', component: ProfilKorisnikComponent },
        {path: 'profil', component: ProfilKorisnikComponent},
        {path: 'pocetna', component: PretragaOglasiComponent}
      ],
      canActivate:[AuthRoleGuard],
      data: { role: 'korisnik'}
    },
    {path: '**', redirectTo: 'mainPage', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
