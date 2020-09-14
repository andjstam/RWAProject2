import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DirectorComponent } from './components/director/director.component';
import { UserComponent } from './components/user/user.component';
import { AuthRoleGuard } from './services/auth-role.guard';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { ProfileDirectorComponent } from './components/profile-director/profile-director.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { SearchEventsComponent } from './components/search-events/search-events.component'

const routes: Routes = [
    {path: '', redirectTo: '/mainPage', pathMatch: 'full'},
    {path: 'mainPage', component: MainPageComponent},
    {
      path: 'reziser',
      component: DirectorComponent,
      canActivate:[AuthRoleGuard],
      children: [
        {path: '', component: ProfileDirectorComponent },
        {path: 'profil', component: ProfileDirectorComponent},
        {path: 'pocetna', component: SearchUsersComponent}
      ],
      data: { role: 'reziser'}
    },
    {
      path: 'korisnik',
      component: UserComponent,
      children: [
        {path: '', component: ProfileUserComponent },
        {path: 'profil', component: ProfileUserComponent},
        {path: 'pocetna', component: SearchEventsComponent}
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
