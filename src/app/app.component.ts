import { Component } from '@angular/core';
// @ts-ignore
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'inventory-app';
  products: Array<Product>;
  constructor() {
    // const product = new Product('NICECAT',
    //   'Just black hat', '/assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99);
    // this.product = product;
    this.products = [
      new Product('shoes', 'adidas', 'cc.ru', ['shoes', 'men'], 9.99),
      new Product('skirt', 'nike', 'abra.ru', ['skirts', 'woman'], 19.99),
      new Product('panties', 'thongs', 'amazon.ca', ['underwear', 'women'], 8.99)

    ];
  }
  productWasSelected(product: Product): void {
    console.log('Product selected ', product);
}
}

