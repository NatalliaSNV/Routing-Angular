import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    isAuth = true;

    login() {
        this.isAuth = true;
    }

    logout() {
        this.isAuth = false;
    }

    isAuthentificated(): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {resolve(this.isAuth)}, 1000);
        });
    }
}