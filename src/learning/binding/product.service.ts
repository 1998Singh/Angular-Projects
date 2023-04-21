import { Injectable } from "@angular/core";


interface IProducts {
  ProductId: number,
  ArtNo: number,
  Provider: string,
  ProviderArtNo: string,
  Brand: string,
  Price: number,
  BuyAccount: string,
  SalesAccount: string
}

@Injectable({ providedIn: 'root' })
export class ProductsService {

  products: IProducts[] = [];
  getAllProductsUsingTrackBy() {
    return this.products = [
      {
        ProductId: 1,
        ArtNo: 100,
        Provider: "OppoProvider",
        ProviderArtNo: "1YU",
        Brand: "Oppo",
        Price: 7810.23,
        BuyAccount: "123",
        SalesAccount: "321"

      },
      {
        ProductId: 1,
        ArtNo: 101,
        Provider: "MI",
        ProviderArtNo: "23R",
        Brand: "MI",
        Price: 78100.23,
        BuyAccount: "245",
        SalesAccount: "143"

      },
      {
        ProductId: 1,
        ArtNo: 102,
        Provider: "Realme",
        ProviderArtNo: "zxi",
        Brand: "Realme",
        Price: 17810.23,
        BuyAccount: "103",
        SalesAccount: "555"

      },
      {
        ProductId: 1,
        ArtNo: 103,
        Provider: "IPhone",
        ProviderArtNo: "uf2g",
        Brand: "Apple",
        Price: 117810.23,
        BuyAccount: "909",
        SalesAccount: "398"

      },
    ];
  }

  getAllProductsUsingTrackByExample() {
    return this.products = [
      {
        ProductId: 1,
        ArtNo: 100,
        Provider: "OppoProvider",
        ProviderArtNo: "1YU",
        Brand: "Oppo",
        Price: 7810.23,
        BuyAccount: "123",
        SalesAccount: "321"

      },
      {
        ProductId: 1,
        ArtNo: 101,
        Provider: "MI",
        ProviderArtNo: "23R",
        Brand: "MI",
        Price: 78100.23,
        BuyAccount: "245",
        SalesAccount: "143"

      },
      {
        ProductId: 1,
        ArtNo: 102,
        Provider: "Realme",
        ProviderArtNo: "zxi",
        Brand: "Realme",
        Price: 17810.23,
        BuyAccount: "103",
        SalesAccount: "555"

      },
      {
        ProductId: 1,
        ArtNo: 103,
        Provider: "IPhone",
        ProviderArtNo: "uf2g",
        Brand: "Apple",
        Price: 117810.23,
        BuyAccount: "909",
        SalesAccount: "398"

      },
      {
        ProductId: 1,
        ArtNo: 104,
        Provider: "Sumsung s23",
        ProviderArtNo: "UYU",
        Brand: "Sumsung",
        Price: 117810.23,
        BuyAccount: "678",
        SalesAccount: "361"

      },
      {
        ProductId: 1,
        ArtNo: 99,
        Provider: "Micromax 2",
        ProviderArtNo: "Max",
        Brand: "Micromax ",
        Price: 17810.23,
        BuyAccount: "888",
        SalesAccount: "881"

      }
    ].sort(function (a, b) {
        return a.ArtNo - b.ArtNo;
      });
  }

}