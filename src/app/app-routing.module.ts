import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ReziserComponent } from './components/reziser/reziser.component';
import { KorisnikComponent } from './components/korisnik/korisnik.component';
import { AuthRoleGuard } from './components/login/auth-role.guard';

const routes: Routes = [
    {path: '', redirectTo: '/mainPage', pathMatch: 'full'},
    {path: 'mainPage', component: MainPageComponent},
    {
      path: 'reziser',
      component: ReziserComponent,
      data: { role: 'reziser'}
    },
    {
      path: 'korisnik',
      component: KorisnikComponent,
      data: { role: 'korisnik'}
    },
    {path: '**', redirectTo: 'mainPage', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
