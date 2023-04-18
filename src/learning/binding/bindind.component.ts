import { Component } from "@angular/core"

@Component({

  selector:'app-binding',
  templateUrl:'./binding.component.html'

})
export class BindingComponent{
  username:string
  constructor(){
    this.username="Murthy"
  }
 
  // mocked json.
  items:any=[

    {id:101,name:'Next js',fee:5000},
    {id:102,name:'Vus js',fee:8000},
    {id:101,name:'Angular js',fee:4000}

  ]

  trackById(index:number,item:any){
    return item.id
  }

  clicked:boolean=false
  clickedItem:any={name:'',fee:0}
 
  onItemClicked(item:any){
    this.clicked=true
    this. clickedItem=item

  }

  buttonStatus:boolean=false
  save(event:any):void{
    alert("ok..thankyou for Enrolling ")
    this.buttonStatus=true

  }
}