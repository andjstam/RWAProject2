import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {isLoggedIn, selectLoggedUser} from './auth.selectors';
import {AppState} from '../reducers'



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
        // this.store.select(selectLoggedUser).subscribe(
        //   user =>{
        //     let expectedRole: string=route.data.role;
        //     console.log("iz stora: "+user.role)
        //     console.log("ocekivano: "+expectedRole)
        //     console.log(user.role===expectedRole);
        //   if(user.role===expectedRole){
        //     return true;
        //   }
        //   else{
        //   this.router.navigate([`./${user.role}`]);
        //   return false;
        //   }
        // })
    }
    this.router.navigate(['./mainPage']);
    return false;
  }
}