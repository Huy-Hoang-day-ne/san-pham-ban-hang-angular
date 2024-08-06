import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  detailProduct!: ProductModel;

  constructor(
    public cartService: CartService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
  ) {
    const { id } = this.activatedRoute.snapshot.params;
    // tìm product theo id
    this.detailProduct = this.cartService.products.find(
      (product) => product.id == parseInt(id),
    ) as ProductModel;
    console.log(this.detailProduct);
  }

  addToCart(value: any) {
    if (this.authService.currentUser) {
      this.cartService.addToCart(value);
    } else {
      alert('Please login to add items to cart');
    }
  }
}
