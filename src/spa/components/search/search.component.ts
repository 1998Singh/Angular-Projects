import { ChangeDetectorRef,
  Component, DoCheck, Input,
  OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
 selector: 'app-search',
 templateUrl: './search.component.html'
})
//container- parent
export class SearchComponent  {
 constructor() { }
 search:string='computer'
}
//-------------------------------------------------------------------------------------
//mocked data
const mockedData = [
 { id: 1, name: 'computer for gaming', price:500 },
 { id: 2, name: 'computer for home', price:430 },
 { id: 3, name: 'printer laser HP', price: 150 },
 { id: 4, name: 'printer deskjet HP', price: 230},
 { id: 5, name: 'mouse', price: 23},
 { id: 6, name: 'keyboard', price: 50},
 { id: 7, name: 'stablizer', price: 45}
];

//child  - search-details
@Component({
 selector: 'search-details',
 template: `
 <div class="bg-light">
   <h4 class="text-danger text-center">Product Details</h4>
   <h5>Searching for <b>{{search}} </b></h5>
   <div style="background:lightyellow">

   <table class="center" >
     <thead>
       <tr class="bg-dark text-light">
         <td>Product ID</td>
         <td>Product Name</td>
         <td>Price</td>
        </tr>
     </thead>
     <tbody *ngFor="let data of results">
       <tr>
         <td> <b>{{data.id}}</b></td>
         <td>{{data.name}}</td>
         <td>{{data.price | currency:'USD'}}</td>
     </tr>
  </table>
   </div>
</div>
 `
})

export class SearchDetailsComponent
     implements OnInit ,OnChanges,DoCheck{
 @Input()
 search:string= ' '
 results:any={}
 //1. step
 constructor(private cd:ChangeDetectorRef) {
   console.log(`In Constructor: ${this.search}`)//
   this.cd.detach()
 }

 filterData(item:string) {
 if (item) {
   return mockedData.filter(data => {
     return data.name.toLowerCase().includes(item.toLowerCase());
   });
 } else {
   return mockedData;
 }
}

 ngOnChanges(changes: SimpleChanges): void {
   //fired every time when state changes
   //make api calls for live data
   console.log(`In onChanges: ${this.search}`)//
   for( let key in changes){
     console.log(`${key} changed
         - Current : ${changes[key].currentValue}
         - Previous :${changes[key].previousValue}`)
   }
   this.results=this.filterData(`${this.search}`)
 }

 ngOnInit() {
   //fired only once, make api calls here (ajax) and update state
   //subscribe to web sockets, observables, cookies
   console.log(`In ngInit: ${this.search}`)  
 
   setTimeout(()=>{
      this.cd.reattach()
  },5000)

 }
 ngDoCheck():void{
  //every time state changes 
  console.log(`In onCheck: ${this.search}`)
  //CDS(change detection strategy) decide whether to render or not.
  // if(this.search.length>3){
  //     this.cd.detectChanges()
  // }

 }

 // event

  ngAfterViewChecked(){
    //this is called every time  when state changes or detect changes
//   //manuplate DOM(Document Object Model).
  console.log(`ng  after view checked: ${this.search}`)
 }

 ngOnDestroy():void{
//   //fired only once when comp removed from shadow dom
//   //cache process -cache, unsubscribe to websocket, observable
   console.log(`i m destroyed...`)
 }

}
