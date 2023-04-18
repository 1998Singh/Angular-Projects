import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-di',
  template: `
  
  <h4> Product Details</h4>
  Title:{{product.title}}-
  Description:{{product.desc}}-
  Price:{{product.price}}
  
  `
})

export class ProductComponent implements OnInit {
  constructor(public ps:ProductService) { }
   product:any
  ngOnInit() {

    this.product=this.ps.getProduct()
   }
}