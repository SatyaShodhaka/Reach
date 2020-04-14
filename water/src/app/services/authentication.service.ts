import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false)
  constructor(private storage: Storage, private plt: Platform ) {
    this.plt.ready().then(() => {
      this.checkToken();   //Check if the platform is ready for actions
    });
   }

   async login() {
    const res = await this.storage.set(TOKEN_KEY, 'Bearer 123456');
     this.authenticationState.next(true);
   }

   async logout() {
    await this.storage.remove(TOKEN_KEY);
     this.authenticationState.next(false);
   }

   async isAuthenticated() {
    return this.authenticationState.value;
   }

   async checkToken() {
    const res = await this.storage.get(TOKEN_KEY);
     if (res) {
       this.authenticationState.next(true);
     }
   }
}
