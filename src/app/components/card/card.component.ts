import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(public cartService: CartService) {}

  addToCart(value: any) {
    this.cartService.addToCart(value);
  }

  @Input() id = 0;
  @Input()
  name = '';
  @Input()
  price = 0;
  @Input()
  inStock = 0;
  // @Input()
  // quantity = 0;
  // @Output() buttonClick = new EventEmitter<any>();
  //
  // clickButton(value: any) {
  //   this.buttonClick.emit(value);
  //   console.log('Button clicked:');
  // }
}
