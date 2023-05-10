import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NewsComponent } from './news.component';

@Component({
  templateUrl: './homepage.component.html'
})

export class HomePageComponent implements OnInit {
  constructor(private vcr:ViewContainerRef) { }

  inject(){
    const compRef= this.vcr.createComponent(NewsComponent) //this line is equls to<app-news>
    compRef.changeDetectorRef.detectChanges()
}

  ngOnInit() { }
}
