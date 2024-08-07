import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatButton],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }
}
