import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map,debounceTime,switchMap,catchError } from 'rxjs';
import { Observable,of} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})

export class WeatherComponent implements OnInit {
  private baseUrl:string='http://api.openweathermap.org/data/2.5/weather?q='
  private urlSuffix='&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73'

searchInput:FormControl=new FormControl() 
city:string | undefined
temperature:string | undefined
description :string | undefined
humidity:string | undefined
loading :boolean | undefined
errorMsg:string =' '
  
  constructor(private http:HttpClient) { }

  ngOnInit() { 

    this.searchInput.valueChanges
       .pipe(map((data)=>{
          this.loading=true
          this.errorMsg=' '
          return data
       } ))
        .pipe(debounceTime(2000))
        .pipe( switchMap ( (city:string)=>{
          return this.getWeather(city)
            .pipe( catchError ((err)=>{
              this.errorMsg=JSON.stringify(err.error.message)
              this.loading=false
              return of([])
            }))
        }))
        .subscribe({
          next: (resp:any) =>{
            if (this.errorMsg== ' '){
              this.city= resp.name+ ','+resp.sys.country;
              this.description=resp.weather[0].description
              this.temperature=resp.main.temp
              this.humidity=resp.main.humidity
            }
            this.loading=false
          },
          error: (err:any)=>{
              this.loading=false
              this.errorMsg='Error.... in URL'
              return of(err)
          },
          complete:()=>{
              console.log("All work done")
              return of([]) //clean the cache
          }
        })

        this.searchInput.setValue('chennai')
  } //nginit over here

  getWeather(city:string):Observable<Array<string>>{
     return this.http.get(this.baseUrl+city+this.urlSuffix)
        .pipe(map((response:any)=>{
          console.log(response)
          return response
        }))

  }
}