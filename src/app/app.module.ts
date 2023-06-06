import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BindingComponent } from 'src/learning/binding/bindind.component';
import { DIModule } from 'src/learning/di/di.module';
import { TrackbyComponent } from 'src/learning/binding/trackby.component';
import { BindingModule } from 'src/learning/binding/binding.module';
import { SPAModule } from 'src/spa/spa.module';
import { WeatherComponent } from 'src/learning/http/weather.component';

@NgModule({
  declarations: [
    AppComponent,BindingComponent,TrackbyComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,
    FormsModule,DIModule,BindingModule,SPAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
