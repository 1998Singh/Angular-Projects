import { Injectable } from "@angular/core";
import { Product } from "./product";

interface ILogger
{
  logMessage(msg:string):void
}

@Injectable()
export class ProductService implements ILogger{
 
  logMessage(msg: string): void 
  {
    console.log(msg)
  }

  getProduct():Product{

    this.logMessage('Someone invoked getProduct()')
    return new Product(101,'Computer','Gaming Desktop',50000)
    
  }

}