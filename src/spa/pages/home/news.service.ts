import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NewsService {
  
  public msg='Evoke bagged a new project on Angular 15'
  
  // ajax calles or web socket

  getNews():string{
    // http.get(url)
    return this.msg
  }
}