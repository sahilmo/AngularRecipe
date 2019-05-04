import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService) {
    }
    canLoad(route: Route) {
        return this.authService.isAuthenticated();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
}
