import { Component, OnInit } from '@angular/core';
import { ProductsService } from './product.service';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html'
})

export class TrackbyComponent implements OnInit {

  companyProduct: any[] =[]

  SampleMessage = "Fetching records using TrackBy for Performance";
  constructor(private ps: ProductsService) {
  }

  ngOnInit() {
      this.companyProduct = this.ps.getAllProductsUsingTrackBy();
  }
  getNewCompanies(): void {
      this.companyProduct =
          this.ps.getAllProductsUsingTrackByExample();
    }

  trackByArtNo(index: number, companyProduct: any): string {
      return companyProduct.ArtNo;

  }

}
