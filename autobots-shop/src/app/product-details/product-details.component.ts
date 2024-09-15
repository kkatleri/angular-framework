import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  getImageUrl(product: IProduct){
    return "assets/images/robot-parts/" + product.imageName
  }

  isDiscounted(product: IProduct){
    return product.discount > 0;
  }

  getDiscountedStyle(product: IProduct){
    return {strikethrough:product.discount>0};
  }

  getDiscount(product: IProduct){
    return product.price * (1-product.discount);
  }

  buyButtonClicked(product: IProduct){
    this.buy.emit('');
  }

}
