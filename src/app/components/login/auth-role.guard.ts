import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {isLoggedIn, loggedUserRole} from './auth.selectors';
import {AppState} from '../../reducers'



@Injectable({ providedIn: 'root' })
export class AuthRoleGuard implements CanActivate {
  logged:boolean=false;
  
  constructor(private store: Store<AppState>, 
              private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean  {

    this.store.select(isLoggedIn).subscribe( 
      value => this.logged=value
    )
    if(this.logged){
      this.store.select(loggedUserRole).subscribe(
        role =>{
          let expectedRole: string=route.data.role;
          console.log(role==expectedRole);
          console.log(role===expectedRole);
          // if(!(role==expectedRole)){
          //   this.router.navigate([`./${role}`]);
          //   return false;
          // }
          // return true;
        })
    }
    this.router.navigate(['./mainPage']);
    return false;
    
  }
}