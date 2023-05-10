import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SPARouterModule } from './spa.router';
import { SPAComponent } from './spa.component';
import { PageNotFoundComponent } from './pages/home/notfound/pagenotfound.component';
import { HomePageComponent } from './pages/home/homepage.component';
import { SearchComponent, SearchDetailsComponent } from './components/search/search.component';
import { LoginComponent } from './pages/home/login/login.component';
import { ContactListComponent } from './pages/contacts/contactlist.component';
import { ShowComponent } from './pages/show.component';



@NgModule({
  imports: [CommonModule,FormsModule,SPARouterModule],
  exports: [SPAComponent],
  declarations: [SPAComponent,SearchComponent,SearchDetailsComponent,HomePageComponent,
  LoginComponent,ContactListComponent,ShowComponent],
  providers: [],
})
export class SPAModule { }
