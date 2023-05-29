import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import aboutRoutes from './about.routes';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [CommonModule,aboutRoutes],
  exports: [AboutComponent],
  declarations: [AboutComponent],
  providers: [],
})
export class AboutModule { }
