import { Component, OnInit } from '@angular/core';
import {ProductsService} from './product.service';

@Component({
  selector: 'app-trackby',
  template: `./trackby.component.html`
})

export class TrackbyComponent implements OnInit {
 
  companyProduct:any[]=[]
  SampleMassage="Fatching records using TrackBy for Performance"
  constructor(private ps:ProductsService){

  }

  ngOnInit() { 

    this.companyProduct = this.ps.getAllProductsUsingTrackBy();
  }

  getNewCompanies():void{
    this.companyProduct = 
    this.ps.getAllProductsUsingTrackByExample();
  }

  trackByArtNo(index:number,companyProduct:any):string{
    return companyProduct.ArtNo;
  }
}