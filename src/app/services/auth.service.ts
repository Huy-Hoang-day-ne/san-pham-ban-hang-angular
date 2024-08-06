import { Injectable } from '@angular/core';
import { Auth, signInWithPopup } from '@angular/fire/auth';
import { GoogleAuthProvider } from '@firebase/auth';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private cartService: CartService,
  ) {}

  currentUser!: any;

  async login() {
    const credential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );
    this.currentUser = credential.user;
    const token = await credential.user.getIdToken();
    console.log(token);
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
    this.cartService.cart = [];
  }
}
