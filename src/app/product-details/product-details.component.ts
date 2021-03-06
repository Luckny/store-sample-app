import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  public product: Product | undefined;

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  private getProductFromId(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    this.product = products.find((p) => p.id === productId);
  }

  ngOnInit(): void {
    this.getProductFromId();
  }
}
