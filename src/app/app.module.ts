import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from 'src/learning/binding/bindind.component';
import { DIModule } from 'src/learning/di/di.module';
import { TrackbyComponent } from 'src/learning/binding/trackby.component';
import { BindingModule } from 'src/learning/binding/binding.module';

@NgModule({
  declarations: [
    AppComponent,BindingComponent,TrackbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,DIModule,BindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
