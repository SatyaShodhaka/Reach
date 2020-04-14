import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

    constructor(private authService: AuthenticationService) { }

    canActivate(): any {
            return this.authService.isAuthenticated();
    }
}

