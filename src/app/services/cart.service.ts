import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  products: ProductModel[] = [
    {
      id: 1,
      name: 'Balo ',
      price: 100,
      description: '',
      img: 'assets/img/img.png',
      inStock: 10,
    },
    {
      id: 2,
      name: 'Áo',
      price: 200,
      description: '',
      img: 'assets/img/img_1.png',
      inStock: 5,
    },
    {
      id: 3,
      name: 'Quần',
      price: 300,
      description: '',
      img: 'assets/img/img_2.png',
      inStock: 10,
    },
    {
      id: 4,
      name: 'Giày',
      price: 400,
      description: '',
      img: 'assets/img/img_3.png',
      inStock: 8,
    },
  ];
  cart: any[] = [];

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
