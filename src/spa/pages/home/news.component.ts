import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
    template: `
    <div class= "bg-dark text-info">
        <marquee>  <h5>{{invoke()}}</h5></marquee>
  
</div>
    `
})

export class NewsComponent implements OnInit {
    constructor(private newsService:NewsService) { }

    ngOnInit() { }

    invoke(){
        return this.newsService.getNews() 
    }
}