import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

    constructor(private authService: AuthService, private router: Router) {}

    // canActivate(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot
    // ): Observable<boolean> | Promise<boolean> | boolean {
    //     return this.authService.isAuthentificated().then(isAuth => {
    //                 if (isAuth) {
    //                     return true
    //                 } else {
    //                     this.router.navigate(['/'], {
    //                         queryParams: {auth: false}
    //                     })
    //                 }
    //             });
    // }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            return this.authService.isAuthentificated().then(isAuth => {
                        if (isAuth) {
                            return true
                        } else {
                            this.router.navigate(['/'], {
                                queryParams: {auth: false}
                            });
                            return false;
                        }
                    }) as Promise<boolean>
        
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
                    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    {
        return this.canActivate(childRoute, state);
        
    }
    
}