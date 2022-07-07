import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  public products: Product[] = products;

  public share(): void {
    window.alert('The product has been shared!');
  }

  public onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {}
}
