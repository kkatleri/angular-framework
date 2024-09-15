import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: IProduct[];
  filter: string;

  constructor(private cartSvc: CartService, private productSvc: ProductService) { }

  ngOnInit() {
    this.filter = "";
    this.productSvc.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  setFilter(filter: string){
    this.filter = filter;
  }

  getFilterdProducts(){
    if(this.filter === '')
      return this.products;
    return this.products.filter((product) => product.category === this.filter)
  }
  
  addToCart(product: IProduct){
    this.cartSvc.add(product);
  }
}
