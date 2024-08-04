import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      inStock: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      inStock: 5,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      inStock: 10,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
      inStock: 8,
    },
  ];
  cart: any[] = [];
  //
  // addToCart(item: any) {
  //   this.cart.push(item);
  //   console.log(this.cart);
  // }

  addToCart(item: any) {
    if (this.products[item.id - 1].inStock === 0) {
      return;
    }
    let index = this.cart.findIndex((element) => {
      return element.id === item.id;
    });

    this.products[item.id - 1].inStock--;

    if (index !== -1) {
      this.cart[index].quantity++;
    } else {
      this.cart.push(item);
    }
  }

  removeFromCart(index: any) {
    this.products[this.cart[index].id - 1].inStock += this.cart[index].quantity;
    this.cart.splice(index, 1);
  }
}
