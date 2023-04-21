//@input,@output, debug devtools, profiling..

export interface IPriceQuote {
  stockSymbol: string,
  lastPrice: number
}

export interface ILogger {
  log(msg: string): void;
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-io',
  template: `
  <div class="container"><h3 class="bg-warning">parent component recieved
      {{stockSymbol}}-{{price | currency:'USD'}}
  </h3>
  <price-quote (lastPriceEvent)="priceQuoteHandler($event)"></price-quote>

  <app-notifier [info]="stockInfo"></app-notifier>
  </div>
  `
})

export class ParentComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  stockSymbol: string = '';
  price: number = 0;
  stockInfo: IPriceQuote = {
    'stockSymbol': '',
    'lastPrice': 0
  }
  priceQuoteHandler(event: IPriceQuote) {
    this.stockSymbol = event.stockSymbol,
      this.price = event.lastPrice,
      this.stockInfo = event

  }
}

//--------------------------------------------------------------------------------------
@Component({
  selector: 'price-quote',
  template: `
  <div class="container bg-secondary"><h3 class="">Child priceQuoter {{company}}-{{price | currency:'USD'}}</h3></div>
  

  `
})

export class PriceQuoterComponent implements OnInit, ILogger {
  @Output()
  lastPriceEvent: EventEmitter<IPriceQuote> = new EventEmitter();//strongly typed event
  company: string = "evoke technologies"
  price: number = 0;
  constructor() {
    window.setInterval(() => {
      //ajax http callto API
      let priceQuote: IPriceQuote = {
        stockSymbol: this.company,
        lastPrice: 100 * Math.random()
      }
      this.price = priceQuote.lastPrice
      this.lastPriceEvent.emit(priceQuote)
    }, 1000)
  }
  log(msg: string): void {
    console.log(msg)
  }

  ngOnInit() { }
}
//-----------------------------------------------------------------------------------------------------


@Component({
  selector: 'app-notifier ',
  template: `
  <div class="container bg-success"><h3 class="bg-success">Notifier component
  {{info.stockSymbol}}-{{info.lastPrice}}
  </h3>
  </div> 
  `
})

export class NotifierComponent implements OnInit {
  constructor() { }
  @Input()
  info: IPriceQuote = { 'stockSymbol': '', 'lastPrice': 0 }
  ngOnInit() { }
}