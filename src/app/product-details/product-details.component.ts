import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public product: Product | undefined;

  private getProductFromId(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    this.product = products.find((p) => p.id === productId);
  }

  ngOnInit(): void {
    this.getProductFromId();
  }
}
